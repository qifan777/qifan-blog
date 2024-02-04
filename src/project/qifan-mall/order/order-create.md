---
category:
  - 起凡商城
tag:
  - 订单
  - 订单创建
order: 0
date: 2024-01-31
timeline: true
---
# 订单创建

![订单创建](image-1.png =x350)

## 枚举值添加

需要把创建人和编辑人的id替换成自己的id

```sql
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('a268e25b-b3b7-4fc2-880d-5b97e1acab0b', '2024-01-26 11:11:40.133277', '2024-01-26 11:11:40.133277', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 1, 'ALI_PAY', '支付宝', 1004, '支付方式', 'PAY_TYPE', 0);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('1a687b7d-9b24-47b0-aa57-e361812dcdf0', '2024-01-26 11:10:49.521488', '2024-01-26 11:10:49.521488', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 0, 'WE_CHAT_PAY', '微信支付', 1004, '支付类型', 'PAY_TYPE', 0);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('461a361d-073c-4574-aed1-c025e04a81a3', '2024-01-26 11:09:32.434369', '2024-01-26 11:13:54.428416', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 5, 'REFUNDING', '退款中', 1003, '商品订单状态', 'PRODUCT_ORDER_STATUS', 0);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('2a8a7427-9fb6-4ecb-822c-8b22fd493a93', '2024-01-26 11:08:34.090534', '2024-01-26 11:08:37.984915', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 4, 'CLOSED', '已关闭', 1003, '商品订单状态', 'PRODUCT_ORDER_STATUS', 0);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('a1a13655-7328-45c3-8cdd-dc0d41ef5792', '2024-01-26 11:06:10.939935', '2024-01-26 11:06:16.216645', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 3, 'TO_BE_EVALUATED', '待评价', 1003, '商品订单状态', 'PRODUCT_ORDER_STATUS', 0);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('56e8d930-6953-4f6a-875c-34d5c26802a5', '2024-01-26 11:03:49.162351', '2024-01-26 11:04:00.418344', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 2, 'TO_BE_RECEIVED', '待收货', 1003, '商品订单状态', 'PRODUCT_ORDER_STATUS', 0);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('fc930d38-0612-4217-91ab-809a5be03656', '2024-01-26 11:02:08.987958', '2024-01-26 11:02:22.277984', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 1, 'TO_BE_DELIVERED', '待发货', 1003, '商品订单状态 ', 'PRODUCT_ORDER_STATUS', 0);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('5c820b53-6545-45fd-8442-22f7e486fc8e', '2024-01-26 10:56:45.364997', '2024-01-26 11:02:58.744868', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 0, 'TO_BE_PAID', '待付款', 1003, '商品订单状态', 'PRODUCT_ORDER_STATUS', 0);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('1f01fa7b-f162-4376-870d-9207735f658d', '2024-01-16 09:33:09.151337', '2024-01-16 09:33:09.151337', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 2, 'BUTTON', '按钮', 1002, '菜单类型', 'MENU_TYPE', 2);
INSERT INTO mall.dict (id, created_time, edited_time, creator_id, editor_id, key_id, key_en_name, key_name, dict_id, dict_name, dict_en_name, order_num) VALUES ('416c90b4-42e8-4af1-a3f5-7e321c9c3437', '2024-01-16 09:32:28.555205', '2024-01-16 09:32:28.555205', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', '0f07d638-f1bc-4011-88d8-6dc650ab06a7', 1, 'DIRECTORY', '目录', 1002, '菜单类型', 'MENU_TYPE', 0);

```

添加完之后调用该接口生成枚举类

```shell
GET http://localhost:8877/dict/java
```

## 表/实体类创建

:::tabs

@tab 商品订单

```sql
create table product_order
(
    id             varchar(36) not null
        primary key,
    created_time   datetime(6) not null,
    edited_time    datetime(6) not null,
    creator_id     varchar(36) not null,
    editor_id      varchar(36) not null,
    coupon_user_id varchar(36) null,
    payment_id     varchar(36) not null,
    address_id     varchar(36) not null,
    status         varchar(36) not null,
    remark         text        null
)
```

```java
@Entity
@GenEntity
public interface ProductOrder extends BaseEntity {

  @GenField(value = "备注", order = 0)
  String remark();

  @GenField(value = "订单状态", order = 1, type = ItemType.SELECTABLE, dictEnName = DictConstants.PRODUCT_ORDER_STATUS)
  ProductOrderStatus status();

  @OneToOne
  Payment payment();

  @OneToOne
  Address address();

  @OneToMany(mappedBy = "productOrder")
  @Valid
  @Size(min = 1, message = "订单至少需要一个商品")
  @NotNull(message = "订单至少需要一个商品")
  List<ProductOrderItem> items();
}
```

这个`ProductOrder`实体类设计是电商系统中订单模块的核心部分，它继承了`BaseEntity`基础实体接口。

 实体关系映射 (Jimmer注解)

- `@Entity` 表示这是一个Java持久化实体，将会映射到数据库的`product_order`表。
- `@OneToOne` 关系用于表示一个订单对应一个支付详情记录和一个收货地址信息。例如，通过`payment()`方法可以获取到与该订单相关的具体支付详情，包括支付方式、金额、时间等；而`address()`方法则能获取到用户下单时选择的配送地址信息。
- `@OneToMany(mappedBy = "productOrder")` 表示一个订单可以包含多个商品订单项，与`ProductOrderItem`实体之间是一对多的关系。其中，`mappedBy`属性指定了关联关系在对方实体类（即`ProductOrderItem`）中的维护端字段。

字段解释

1. **备注（remark）**：
   - 该字段是一个字符串类型，用于记录关于此订单的任何额外信息或者用户特殊要求，例如用户对配送、包装等的个性化说明。

2. **订单状态（status）**：
   - 使用枚举类型 `ProductOrderStatus` 表示订单的不同状态，如待支付、已支付、待发货、已发货、已完成、已取消等。通过 `@GenField` 注解定义为可选列表类型，在前端展示时可以从字典表（DictConstants.PRODUCT_ORDER_STATUS）中获取对应的选项。

3. **payment**：
   - 这是一个一对一关联关系，表示每个商品订单都有一个与之关联的支付记录（Payment）。当需要查询订单支付详情时，可以通过这个字段直接访问关联的 `Payment` 实体。

4. **address**：
   - 同样是一对一关联关系，关联到用户的收货地址信息（Address）。存储订单配送的具体地址信息。

5. **items**：
   - 通过一对多关联，定义了一个包含多个 `ProductOrderItem` 的列表，代表订单中包含的商品明细项。
   - 使用 `@Valid` 注解表示列表中的每个元素都必须是有效的 `ProductOrderItem` 实体。
   - `@Size(min = 1, message = "订单至少需要一个商品")` 指定订单至少包含一项商品，否则会抛出校验异常。
   - `@NotNull(message = "订单至少需要一个商品")` 也确保了这一约束，即不能为空列表。

@tab 商品订单项

```sql
create table product_order_item
(
    id               varchar(36) not null
        primary key,
    created_time     datetime(6) not null,
    edited_time      datetime(6) not null,
    creator_id       varchar(36) not null,
    editor_id        varchar(36) not null,
    product_order_id varchar(36) not null,
    product_sku_id   varchar(36) not null,
    count            int         not null
);
```

```java
@Entity
public interface ProductOrderItem extends BaseEntity {

  @ManyToOne
  @Key
  ProductOrder productOrder();

  @ManyToOne
  @Key
  ProductSku productSku();

  @IdView
  String productOrderId();

  @IdView
  @NotBlank(message = "商品sku不能为空")
  String productSkuId();

  @Column(name = "count")
  @Min(value = 1, message = "商品数量不能少于1")
  int skuCount();
}
```

`ProductOrderItem`实体类设计主要是为了实现电商系统中订单项（商品详情）的管理，它是`ProductOrder`与`ProductSku`之间多对多关系的一种体现。

1. **关联订单和商品SKU**：
   - 使用`@ManyToOne`注解表明每个订单项都对应一个具体的订单 (`ProductOrder`) 和一个商品SKU (`ProductSku`)。通过这种方式将订单与具体购买的商品细节紧密关联起来。

2. **复合主键设计**：
   - `productOrderId` 和 `productSkuId` 两个字段共同组成订单项的唯一标识，采用复合主键来确保即使同一订单中有多个相同商品的情况也能区分不同行记录。
   - `@Key` 注解表示这两个字段是此实体类的主键部分。
   - `@NotBlank(message = "商品sku不能为空")` 确保商品SKU ID必填，因为这是识别商品的关键信息。

3. **商品数量记录**：
   - `skuCount` 字段记录了用户在该订单中购买的某一特定商品SKU的数量，通过`@Min(value = 1, message = "商品数量不能少于1")` 进行数据校验，确保商品数量的合法性。

4. **业务逻辑约束**：
   - 类中包含了必要的业务规则约束，如商品数量至少为1，确保订单项记录的是有效购买行为。

`ProductOrderItem`实体类的设计思路就是建立一个连接订单和商品SKU的桥梁，用于详细记录订单中的每一件商品的具体信息，包括购买数量。

@tab 支付详情

```sql
create table payment
(
    id             varchar(36)    not null
        primary key,
    created_time   datetime(6)    not null,
    edited_time    datetime(6)    not null,
    creator_id     varchar(36)    not null,
    editor_id      varchar(36)    not null,
    pay_type       varchar(36)    not null,
    pay_time       datetime       null,
    pay_amount     decimal(10, 2) not null,
    vip_amount     decimal(10, 2) not null,
    coupon_amount  decimal(10, 2) not null,
    product_amount decimal(10, 2) not null,
    delivery_fee   decimal(10, 2) not null,
    trade_no       varchar(36)    null
);
```

```java
@Entity
public interface Payment extends BaseEntity {

  @GenField(value = "支付类型", order = 1, type = ItemType.SELECTABLE, dictEnName = DictConstants.PAY_TYPE)
  PayType payType();

  @NotNull
  @GenField(value = "实付金额", order = 2, type = ItemType.INPUT_NUMBER)
  BigDecimal payAmount();

  @NotNull
  @GenField(value = "配送费", order = 3, type = ItemType.INPUT_NUMBER)
  BigDecimal deliveryFee();

  @NotNull
  @GenField(value = "优惠卷减免", order = 4, type = ItemType.INPUT_NUMBER)
  BigDecimal couponAmount();

  @NotNull
  @GenField(value = "VIP减免", order = 5, type = ItemType.INPUT_NUMBER)
  BigDecimal vipAmount();

  @NotNull
  @GenField(value = "商品金额", order = 6, type = ItemType.INPUT_NUMBER)
  BigDecimal productAmount();

  @GenField(value = "支付时间", order = 7, type = ItemType.DATETIME)
  @Null
  LocalDateTime payTime();

  @GenField(value = "支付订单号", order = 8)
  @Null
  String tradeNo();
}
```

`Payment`实体类它主要负责存储和管理与支付相关的详细信息。

1. **支付类型（payType）**：
   - 使用枚举类型 `PayType` 来表示支付方式，如支付宝、微信支付、银行卡等。通过 `@GenField` 注解可以自动生成前端展示所需的配置信息，并使用字典表（DictConstants.PAY_TYPE）来维护可选的支付类型。

2. **实付金额（payAmount）、配送费（deliveryFee）、优惠券减免（couponAmount）、VIP减免（vipAmount）、商品金额（productAmount）**：
   - 这些字段分别记录了用户实际支付的总金额、订单中的运费、使用的优惠券抵扣额、VIP等级享受的优惠金额以及商品本身的总价。这些数据用于财务对账、结算和分析用户的消费行为。

3. **支付时间（payTime）**：
   - 用于记录订单完成支付的具体时间，这对于追踪交易状态、计算退款期限和进行数据分析至关重要。
   - 使用 `LocalDateTime` 类型存储日期和时间，并允许为空（`@Null`），因为可能有未支付的订单或正在处理中的支付请求。

4. **支付订单号（tradeNo）**：
   - 这是第三方支付平台生成的唯一标识符，通常用于关联到具体的支付交易。当需要查询支付平台上的交易详情或者进行退款操作时，支付订单号是必不可少的信息。

总结来说，`Payment`实体类的设计充分考虑了电商系统中支付环节的各种细节需求，不仅记录了支付的基本信息，还涵盖了费用构成、支付状态及与第三方支付平台交互所需的关键数据，确保整个支付过程能够被准确、完整地记录和追溯。

:::

## 创建订单接口

:::tabs
@tab 创建订单Dto
创建dto修改

`ProductOrderInput` 是一个用于创建订单时的数据传输对象（DTO, Data Transfer Object），它包含了从客户端传递到服务器端创建新订单所需的部分属性，但排除了某些字段并添加了一些额外的细节。

```text
input ProductOrderInput {
    #allScalars(ProductOrder)
    id? # 可选字段，在创建新订单时不需要提供。
    -status # 排除字段，表示在创建订单输入时不包含“status”属性，因为订单状态通常是由系统根据业务逻辑自动设置的，如默认为待支付状态。
    id(address) 用户需要提供一个收货地址的ID，这个地址已经在系统中存在，通过这个ID将订单与具体的收货地址关联起来
    items {            # 订单项集合，包含每个商品SKU的数量和ID信息。
        skuCount       # 每个商品SKU的数量，例如购买某款商品5件。
        productSkuId   # 商品SKU的唯一标识符，用于确定具体购买的是哪一款商品的不同变体。
    }
}
```

实际案例： 假设一位用户要下单购买两个不同商品，分别是商品A的红色款式3件，商品B的蓝色款式2件。那么对应的 ProductOrderInput 示例数据可能是这样的：

```json
{
  "addressId": "1234", // 假设这是已存在的一个有效地址ID
  "items": [
    {
      "skuCount": 3,
      "productSkuId": "AS001-RED"
    },
    {
      "skuCount": 2,
      "productSkuId": "BS002-BLUE"
    }
  ]
}
```

@tab API

```java
  @PostMapping("create")
  public String create(@RequestBody @Validated ProductOrderInput productOrder) {
    return productOrderService.create(productOrder);
  }
```

@tab Service

这段代码的主要功能是处理前端传递过来的订单创建请求，将其转化为符合业务逻辑的实体对象，设置初始状态和相关联的支付详情，并持久化存储到数据库中

1. 首先，生成一个唯一的订单ID字符串，使用了 `UUID.randomUUID().toString()` 方法，确保每个新订单都有一个全局唯一的标识符。

2. 然后，将输入的 DTO (`productOrderInput`) 转换为实体对象 `ProductOrder` 。在前端传来的实体类基础知识使用`ProductOrderDraft`进行编辑，jimmer中编辑实体类需要用Draft辅助类型。

   - 对于订单项集合，遍历draft中的items，使用`ProductOrderItemDraft`给每个订单项设置其关联的订单ID（即刚才生成的 `orderId`）。

3. 在订单草稿对象（draft）上设置一些默认值或必要的属性：
   - 设置订单ID为之前生成的唯一ID。
   - 设置订单状态为 `ProductOrderStatus.TO_BE_PAID`，表示订单还未支付。
   - 创建并初始化一个与订单关联的支付详情对象（Payment），同样使用draft模式生成。设置支付详情的各项金额（如优惠券减免、商品总额、实付金额、运费、VIP减免等）为默认值，并设定支付类型为微信支付（PayType.WE_CHAT_PAY），交易号为空字符串。

4. 最后，将填充完毕的订单实体对象 `entity` 保存至数据库，通过 `productOrderRepository.save(entity)` 方法实现。返回新保存订单的ID作为此方法的结果。

```java
  public String create(ProductOrderInput productOrderInput) {
    String orderId = UUID.randomUUID().toString();
    ProductOrder entity = ProductOrderDraft.$.produce(productOrderInput.toEntity(), draft -> {
      draft.setItems(draft.items().stream().map(item -> {
        return ProductOrderItemDraft.$.produce(item, productOrderItemDraft -> {
          productOrderItemDraft.setProductOrderId(orderId);
        });
      }).toList());
      draft.setId(orderId);
      draft.setStatus(ProductOrderStatus.TO_BE_PAID)
          .setPayment(PaymentDraft.$.produce(paymentDraft -> {
            paymentDraft
                .setId(UUID.randomUUID().toString())
                .setCouponAmount(BigDecimal.ZERO)
                .setProductAmount(BigDecimal.ONE)
                .setPayAmount(BigDecimal.ONE)
                .setDeliveryFee(BigDecimal.ZERO)
                .setVipAmount(BigDecimal.ZERO)
                .setPayType(PayType.WE_CHAT_PAY)
                .setTradeNo("");
          }));
    });
    return productOrderRepository.save(entity).id();
  }

```

:::

## 路由配置

```json {7}
export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/user/index",
    "pages/address/address-list",
    "pages/address/address-save",
    "pages/order/order-create",
  ],
//   忽略...
});

```

## 购物车提交处理

点击提交购物车时，购物车会把已选的SKU通过提交购物车事件向外传播，该方法处理提交购物车事件，并将已选的SKU传给订单提交页面。

1. 当调用`handleSubmit`函数时，它接收一个参数`catItems`，这个数组包含了用户购物车中已选择的商品项目（CartItem对象列表），每个CartItem通常会包含商品的SKU信息（Stock Keeping Unit，库存量单位）以及其他相关信息，如数量、价格等。

2. 函数内部使用了Taro的API `Taro.navigateTo` 来进行页面跳转，将用户的当前路径导航至订单创建页面——"/pages/order/order-create"。

3. 在页面跳转成功后（即`success`回调函数中），通过调用`Taro.eventCenter.trigger`方法触发了一个自定义全局事件——"submitCart"，同时将传入的`catItems`作为参数传递出去。这样，在订单创建页面或其他监听此事件的地方，可以通过`Taro.eventCenter.on`订阅该事件，并接收到这些选中的商品SKU信息，进而实现从购物车到订单页面的数据传输和订单生成操作。

```html
  <cart-list @submit="handleSubmit"></cart-list>
```

```ts
const handleSubmit = (catItems: CartItem[]) => {
  Taro.navigateTo({
    url: "/pages/order/order-create",
    success: () => {
      Taro.eventCenter.trigger("submitCart", catItems);
    },
  });
};
```

## 订单创建页面

### 地址选择

:::tabs
@tab html

1. 地址选择弹出。
   - `v-if="address"`：只有当`address`这个数据属性存在时，才会渲染这部分内容。
   - `@click="addressChooseVisible = true"`：点击此组件时，会触发事件处理器，将`addressChooseVisible`设置为`true`，从而打开地址选择弹出框。

2. `nut-cell`组件中：
   - 使用了`location2`图标组件来表示位置信息。
   - 通过插槽`#title`展示当前选中的地址，由`address-row`组件负责呈现详细信息。
   - 最后，有一个指向右侧的小箭头图标，表明用户可以更换地址。

3. 接下来是一个`<address-choose>`自定义组件，它是一个地址选择器：
   - `v-model:visible="addressChooseVisible"`：该组件使用Vue的`v-model`指令与`addressChooseVisible`双向绑定，控制其可见性，即是否显示地址选择弹出框。
   - `@choose="handleAddressChose"`：监听并绑定`choose`事件，当用户在地址列表中选择了一个新地址时，会触发`handleAddressChose`方法。

```html
<template>
  <div class="order-submit">
    <div class="address" v-if="address">
      <nut-cell is-link center @click="addressChooseVisible = true">
        <template #icon>
          <location2
            color="red"
            size="20"
            style="margin-right: 10px"
          ></location2>
        </template>
        <template #title>
          <address-row :address="address"></address-row>
        </template>
        <template #link>
          <rect-right></rect-right>
        </template>
      </nut-cell>
    </div>
    <address-choose
      v-model:visible="addressChooseVisible"
      @choose="handleAddressChose"
    ></address-choose>
  </div>
</template>
```

@tab ts

1. 导入依赖：
   - `CartItem`：自定义类型，表示购物车中的商品项。
   - `AddressDto`：地址详情Dto。
   - `AddressChoose`：自定义组件，它是一个页面级别的组件，用户可以在该组件内进行地址的选择操作。
   - `RectRight` 和 `Location2`：来自 `@nutui/icons-vue-taro`，这两个组件可能是图标库中的两个图标组件，分别代表矩形右箭头和位置图标。
   - `api`：从 `@/utils/api-instance` 导入的API实例，封装了与服务器通信的方法。

2. 定义响应式状态变量：
   - `addressChooseVisible`：用于控制地址选择弹窗的显示隐藏状态。
   - `address`：存储当前选中的用户地址信息。

3. 定义事件处理器函数：
   - `handleAddressChose`：当用户在 `AddressChoose` 组件中选择了新的地址时，会触发这个函数，并将新选择的地址作为参数传递进来。
   - 在函数内部，通过 `address.value = value` 将新选择的地址赋值给响应式变量 `address`，这样在 UI 上展示的地址就会根据用户的最新选择实时更新。

```ts
import Taro from "@tarojs/taro";
import { computed, ref } from "vue";
import { CartItem } from "@/components/cart/cart-store";
import { AddressDto } from "@/apis/__generated/model/dto";
import AddressChoose from "@/pages/address/address-choose.vue";
import { RectRight, Location2 } from "@nutui/icons-vue-taro";
import { api } from "@/utils/api-instance";

const addressChooseVisible = ref(false);
const address = ref<AddressDto["AddressRepository/SIMPLE_FETCHER"]>();
const handleAddressChose = (
  value: AddressDto["AddressRepository/SIMPLE_FETCHER"],
) => {
  address.value = value;
};
```

@tab css

```scss
page {
  background-color: rgba(black, 0.05);
}

.order-submit {
  .address {
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    .nut-cell {
      margin-top: 0;
    }
    .address-row {
      padding: 0;
    }
  }
}
```

:::

### 商品Sku展示和价格详情

用户提交订单时呈现他们所选商品的具体信息和预估订单费用概览。

:::tabs

@tab html

1. **商品列表**：
   - 使用 `v-for` 循环遍历 `cartItems` （包含了购物车中的所有已选商品项）。
   - 对于每个商品项 `item`，生成一个名为 `product-row` 的自定义组件实例，并将商品 SKU 信息以及品牌信息传入作为属性值。

   ```html
   <product-row
     v-for="item in cartItems"
     :key="item.sku.values.join(',')"
     :product="{
       ...item.sku,
       description: item.sku.values.join(','),
       brand: item.product.brand,
     }"
   >
    <template #operation>
      <div class="sku-count">x{{ item.count }}</div>
    </template>
   </product-row>
   ```

   - 在每个 `product-row` 组件内部，通过插槽 (`<template #operation>`) 渲染出商品数量，显示为 `x{{ item.count }}`。

2. **订单价格详情**：
   - 使用 `nut-cell-group` 和多个嵌套的 `nut-cell` 组件展示订单总价、配送费、优惠券抵扣金额及VIP优惠等详细信息。
   - 目前这些金额都暂时设置为 `0`，之后会在后端进行计算并替换这些静态值。

```html
<template>
  <div class="order-submit">
    <!-- 忽略地址信息... -->
    <div class="product-list">
      <product-row
        v-for="item in cartItems"
        :key="item.sku.values.join(',')"
        :product="{
          ...item.sku,
          description: item.sku.values.join(','),
          brand: item.product.brand,
        }"
      >
        <template #operation>
          <div class="sku-count">x{{ item.count }}</div>
        </template>
      </product-row>
    </div>
    <nut-cell-group class="summary">
      <nut-cell title="商品总价">
        <template #desc>
          <div class="value">￥{{ productPrice }}</div>
        </template>
      </nut-cell>
      <nut-cell title="配送费">
        <template #desc>
          <div class="value">￥{{ 0 }}</div>
        </template>
      </nut-cell>
      <nut-cell title="优惠券">
        <template #desc>
          <div class="value">-￥{{ 0 }}</div>
        </template>
      </nut-cell>
      <nut-cell title="vip优惠">
        <template #desc>
          <div class="value">-￥{{ 0 }}</div>
        </template>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>
```

@tab ts

1. **定义`cartItems` ref数组**：

   ```javascript
   const cartItems = ref<CartItem[]>([]);
   ```

2. **定义计算属性 `productPrice`**：

   ```javascript
   const productPrice = computed(() => {
     return cartItems.value.reduce(
       (prev, cur) => prev + cur.sku.price * cur.count,
       0,
     );
   });
   ```

   `productPrice` 是一个计算属性，它依赖于 `cartItems` 数组的变化而自动更新。这里的计算逻辑是对 `cartItems` 中每一个商品项的价格（`cur.sku.price`）乘以购买数量（`cur.count`），然后累加所有商品的总价值，初始值设为 `0`。

3. **监听提交购物车事件**：

   ```javascript
   Taro.eventCenter.on("submitCart", (items: CartItem[]) => {
     cartItems.value = items;
   });
   ```

   使用Taro的全局事件中心 (`Taro.eventCenter`) 监听名为 "submitCart" 的事件。当这个事件被触发时，回调函数会接收到一个 `CartItem` 类型的数组 `items`，并将这个数组赋值给 `cartItems` ，从而更新购物车中的商品列表。

整体逻辑：接收到新的购物车商品数据时，通过监听的“submitCart”事件将新数据同步到 `cartItems` 中，并自动更新计算出的商品总价

```ts
// 忽略地址...
const cartItems = ref<CartItem[]>([]);
const productPrice = computed(() => {
  return cartItems.value.reduce(
    (prev, cur) => prev + cur.sku.price * cur.count,
    0,
  );
});
Taro.eventCenter.on("submitCart", (items: CartItem[]) => {
  cartItems.value = items;
});
```

@tab css

```scss
.order-submit {
  // 忽略地址样式...
  // 商品SKU展示样式
  .product-list {
    background-color: white;
    padding: 32px;
    border-radius: 12px;
    margin-bottom: 30px;
    .sku-count {
      font-size: 28px;
    }
  }
  // 价格详情样式
  .summary {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    .value {
      color: rgba(black, 0.9);
      font-weight: bold;
    }
  }
}
```

:::

### 订单提交

:::tabs
@tab html

```html
<template>
  <div class="order-submit">
    <div class="submit-bar-wrapper">
      <div class="submit-bar">
        <div class="price">￥{{ productPrice }}</div>
        <nut-button type="danger" @click="saveOrder">提交订单</nut-button>
      </div>
    </div>
  </div>
</template>
```

@tab ts

处理订单提交的逻辑。具体步骤如下：

1. **地址验证**：
   - 首先检查 `address.value` 是否存在（即用户是否已选择收货地址）。若未选择，则通过 Taro 的 `Taro.showToast` API 显示一个提示信息“请选择收货地址”，并返回以阻止后续操作。

2. **发起API请求**：
   - 如果地址已选择，则调用后端接口 `api.productOrderController.create` 创建一个新的订单。
   - 请求体([ProductOrderInput](#创建订单接口))包含以下字段：
     - `remark`：空字符串，代表订单备注，默认为空。
     - `items`：基于购物车商品数据（`cartItems.value`）映射生成，每个元素是一个对象，包含商品SKU ID (`productSkuId`) 和购买数量 (`skuCount`)。
     - `addressId`：用户选择的收货地址ID。

3. **处理响应结果**：
   - 当后端成功创建订单并返回响应时，打印响应内容到控制台，并使用 `Taro.showToast` 展示一个成功的提示消息：“订单创建成功”。

```ts
const saveOrder = () => {
  if (!address.value) {
    Taro.showToast({
      title: "请选择收货地址",
      icon: "none",
      duration: 1000,
    });
    return;
  }
  api.productOrderController
    .create({
      body: {
        remark: "",
        items: cartItems.value.map((item) => ({
          productSkuId: item.sku.id,
          skuCount: item.count,
        })),
        addressId: address.value.id,
      },
    })
    .then((res) => {
      console.log(res);
      Taro.showToast({
        title: "订单创建成功",
        icon: "success",
        duration: 1000,
      });
    });
};
```

@tab css

```scss
.order-submit {
  .submit-bar-wrapper {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;

    .submit-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      width: 700px;
      .price {
        font-size: 34px;
        color: red;
      }
    }
  }
}
```

:::
