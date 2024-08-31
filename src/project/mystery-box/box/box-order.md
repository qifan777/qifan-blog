---
order: 3
---
# 订单

![订单创建](../image-4.png =x500)

## 表设计

从创建订单的页面中可以分成三类信息

1. 盲盒信息，购买的盲盒id以及盲盒数量。
2. 通用信息，地址/优惠券/备注/物流信息（发货后显示）
3. 价格计算，vip优惠/优惠券优惠/邮费/商品总价/实付金额

### 盲盒订单

```sql
create table mystery_box_order
(
    id            varchar(32) not null
        primary key,
    created_time  datetime(6) not null,
    edited_time   datetime(6) not null,
    creator_id    varchar(32) not null,
    editor_id     varchar(32) not null,
    status        varchar(32) not null comment '订单状态',
    base_order_id varchar(32) not null comment '基础订单id'
)
    comment '盲盒订单';
```

如果有做购物车功能，一次性可能会购买多个盲盒，每个盲盒的数量不一样。这样的需求就需要一个中间表来关联订单和盲盒的关系。

设计订单时要考虑到盲盒信息会发生变动，因此要把购买时的盲盒信息存入到数据库（盲盒快照），而不是只存储盲盒id。如果存储的是盲盒id，通过关联查询得到是最新的盲盒信息，而不是下单时的信息。

只有在支付成功后才会显示开盲盒得到的商品，同样也是存储商品快照。

```sql
create table mystery_box_order_item
(
    id                   varchar(32) not null
        primary key,
    created_time         datetime(6) not null,
    edited_time          datetime(6) not null,
    creator_id           varchar(32) not null,
    editor_id            varchar(32) not null,
    mystery_box_id       varchar(32) not null comment '盲盒id',
    mystery_box          json        not null comment '盲盒信息',
    mystery_box_order_id varchar(32) not null comment '盲盒订单id',
    mystery_box_count    int         not null comment '盲盒数量',
    products             json        null comment '开盲盒得到的商品'
)
    comment '盲盒订单项';
```

### 基础订单

基础订单是各种订单里面抽出来的通用字段组合成的一张表，并且关联了支付的详情信息，因为支付本身也是一种通用的信息。

基础订单里面存储的是地址的快照，而不是地址id。之所以能存储优惠券id是因为优惠券一般不会修改，只会作废下线再生成新的优惠券。

除了盲盒订单之外，VIP订单也用到了基础订单，所以这边`type`字段可以标识基础订单是来自于哪个业务。

除了理解字段外，可空性也比较重要。像有些订单不需要发货走线下自然就不会用到地址信息和物流单号，有些订单不需要优惠券，但是支付信息是必须要的。

```sql
create table base_order
(
    id              varchar(36)   not null
        primary key,
    created_time    datetime(6)   not null,
    edited_time     datetime(6)   not null,
    creator_id      varchar(36)   not null,
    editor_id       varchar(36)   not null,
    payment_id      varchar(36)   not null comment '支付订单id',
    address         varchar(1000) null comment '地址详情',
    remark          varchar(100)  null comment '备注',
    tracking_number varchar(50)   null comment '物流单号',
    coupon_user_id  varchar(36)   null comment '用户优惠券id',
    type            varchar(32)   not null comment '订单类型'
)
    comment '基础订单';
```

### 支付详情

支付详情在创建订单的时候就有了，此时支付时间和外系统交易订单号还是为空的状态。

用户在小程序中发起支付后，微信支付收到金额再调用我们的后台。在我们的后台中收到微信回调的请求，并用私钥解密请求得到订单id，再更新订单状态和支付信息。

支付方式在这个项目中只用到了微信支付。

```sql
create table payment
(
    id             varchar(36)    not null
        primary key,
    created_time   datetime(6)    not null,
    edited_time    datetime(6)    not null,
    creator_id     varchar(36)    not null,
    editor_id      varchar(36)    not null,
    pay_type       varchar(36)    not null comment '支付方式（微信，支付宝等）',
    pay_time       datetime       null comment '支付时间',
    pay_amount     decimal(10, 2) not null comment '实付金额',
    vip_amount     decimal(10, 2) not null comment 'vip优惠金额',
    coupon_amount  decimal(10, 2) not null comment '优惠券优惠金额',
    product_amount decimal(10, 2) not null comment '商品总价',
    delivery_fee   decimal(10, 2) not null comment '邮费',
    trade_no       varchar(36)    null comment '外系统交易订单号'
)
    comment '支付详情';
```
