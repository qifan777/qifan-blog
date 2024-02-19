const n=JSON.parse(`{"key":"v-ffa9e9de","path":"/project/qifan-mall/order/order-details.html","title":"订单详情","lang":"zh-CN","frontmatter":{"category":["起凡商城"],"tag":["订单","订单详情"],"order":4,"date":"2024-02-01T00:00:00.000Z","timeline":true,"description":"订单详情 源码 解析请参考 ","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/project/qifan-mall/order/order-details.html"}],["meta",{"property":"og:site_name","content":"起凡Code闲聊"}],["meta",{"property":"og:title","content":"订单详情"}],["meta",{"property":"og:description","content":"订单详情 源码 解析请参考 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-19T08:37:13.000Z"}],["meta",{"property":"article:author","content":"起凡"}],["meta",{"property":"article:tag","content":"订单"}],["meta",{"property":"article:tag","content":"订单详情"}],["meta",{"property":"article:published_time","content":"2024-02-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-19T08:37:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"订单详情\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-19T08:37:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"起凡\\",\\"url\\":\\"https://www.jarcheng.top\\"}]}"]]},"headers":[{"level":2,"title":"源码","slug":"源码","link":"#源码","children":[]}],"git":{"createdTime":1707047725000,"updatedTime":1708331833000,"contributors":[{"name":"linjiacheng","email":"1507906763@qq.com","commits":2}]},"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"project/qifan-mall/order/order-details.md","localizedDate":"2024年2月1日","excerpt":"\\n<h2>源码</h2>\\n<p>解析请参考<a href=\\"/blog/project/qifan-mall/order/order-create.html\\" target=\\"_blank\\">订单创建</a></p>\\n<div class=\\"language-vue\\" data-ext=\\"vue\\" data-title=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>order-details<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-if</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>order<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>address<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>nut-cell</span> <span class=\\"token attr-name\\">is-link</span> <span class=\\"token attr-name\\">center</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span> <span class=\\"token attr-name\\">#icon</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>location2</span>\\n            <span class=\\"token attr-name\\">color</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>red<span class=\\"token punctuation\\">\\"</span></span>\\n            <span class=\\"token attr-name\\">size</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>20<span class=\\"token punctuation\\">\\"</span></span>\\n            <span class=\\"token special-attr\\"><span class=\\"token attr-name\\">style</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span><span class=\\"token value css language-css\\"><span class=\\"token property\\">margin-right</span><span class=\\"token punctuation\\">:</span> 10px</span><span class=\\"token punctuation\\">\\"</span></span></span>\\n          <span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>location2</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span> <span class=\\"token attr-name\\">#title</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>address-row</span> <span class=\\"token attr-name\\">:address</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>order.address<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>address-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span> <span class=\\"token attr-name\\">#link</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>rect-right</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>rect-right</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>nut-cell</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>product-list<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>product-row</span>\\n        <span class=\\"token attr-name\\">v-for</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item in order.items<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">:key</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>item.productSku.values.join(',')<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token attr-name\\">:product</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>{\\n          ...item.productSku,\\n          description: item.productSku.values.join(','),\\n          brand: item.productSku.product.brand,\\n        }<span class=\\"token punctuation\\">\\"</span></span>\\n      <span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span> <span class=\\"token attr-name\\">#operation</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>sku-count<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>x{{ item.skuCount }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>product-row</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>nut-cell-group</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>summary<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>nut-cell</span> <span class=\\"token attr-name\\">title</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>商品总价<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span> <span class=\\"token attr-name\\">#desc</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>value<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>￥{{ order.payment.productAmount }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>nut-cell</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>nut-cell</span> <span class=\\"token attr-name\\">title</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>配送费<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span> <span class=\\"token attr-name\\">#desc</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>value<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>￥{{ order.payment.deliveryFee }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>nut-cell</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>nut-cell</span> <span class=\\"token attr-name\\">title</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>优惠券<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span> <span class=\\"token attr-name\\">#desc</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>value<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>-￥{{ order.payment.couponAmount }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>nut-cell</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>nut-cell</span> <span class=\\"token attr-name\\">title</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>vip优惠<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span> <span class=\\"token attr-name\\">#desc</span><span class=\\"token punctuation\\">&gt;</span></span>\\n          <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>value<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>-￥{{ order.payment.vipAmount }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>nut-cell</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>nut-cell-group</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>pay-cancel-wrapper<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>pay-cancel<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>cancel<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>取消订单<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>nut-button</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>danger<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token punctuation\\">&gt;</span></span>立即支付 ￥{{ order.payment.payAmount }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>nut-button</span>\\n        <span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>ts<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ref <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"vue\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ProductOrderDto <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"@/apis/__generated/model/dto\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> RectRight<span class=\\"token punctuation\\">,</span> Location2 <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"@nutui/icons-vue-taro\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> api <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"@/utils/api-instance\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> Taro <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"@tarojs/taro\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> order <span class=\\"token operator\\">=</span> ref<span class=\\"token operator\\">&lt;</span>ProductOrderDto<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"ProductOrderRepository/COMPLEX_FETCHER\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nTaro<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">useLoad</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token punctuation\\">{</span> id <span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  api<span class=\\"token punctuation\\">.</span>productOrderController<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">findById</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> id <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">then</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">res</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    order<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> res<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>scss<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n<span class=\\"token atrule\\"><span class=\\"token rule\\">@import</span> <span class=\\"token string\\">\\"../../app.scss\\"</span><span class=\\"token punctuation\\">;</span></span>\\n\\n<span class=\\"token selector\\">page</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> <span class=\\"token function\\">rgba</span><span class=\\"token punctuation\\">(</span>black<span class=\\"token punctuation\\">,</span> 0.05<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token selector\\">.order-details</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token selector\\">.address</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> white<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">border-bottom-left-radius</span><span class=\\"token punctuation\\">:</span> 12px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">border-bottom-right-radius</span><span class=\\"token punctuation\\">:</span> 12px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token selector\\">.nut-cell</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">margin-top</span><span class=\\"token punctuation\\">:</span> 0<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token selector\\">.address-row</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">padding</span><span class=\\"token punctuation\\">:</span> 0<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token selector\\">.sku-count</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">font-size</span><span class=\\"token punctuation\\">:</span> 28px<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token selector\\">.product-list</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> white<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">padding</span><span class=\\"token punctuation\\">:</span> 32px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">border-radius</span><span class=\\"token punctuation\\">:</span> 12px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">margin-bottom</span><span class=\\"token punctuation\\">:</span> 30px<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token selector\\">.summary</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">border-top-left-radius</span><span class=\\"token punctuation\\">:</span> 30px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">border-top-right-radius</span><span class=\\"token punctuation\\">:</span> 30px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token selector\\">.value</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> <span class=\\"token function\\">rgba</span><span class=\\"token punctuation\\">(</span>black<span class=\\"token punctuation\\">,</span> 0.9<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">font-weight</span><span class=\\"token punctuation\\">:</span> bold<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token selector\\">.pay-cancel-wrapper</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span> flex<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">justify-content</span><span class=\\"token punctuation\\">:</span> center<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">position</span><span class=\\"token punctuation\\">:</span> fixed<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">bottom</span><span class=\\"token punctuation\\">:</span> 0<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 100%<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token selector\\">.pay-cancel</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">display</span><span class=\\"token punctuation\\">:</span> flex<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">align-items</span><span class=\\"token punctuation\\">:</span> center<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">justify-content</span><span class=\\"token punctuation\\">:</span> space-between<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">padding</span><span class=\\"token punctuation\\">:</span> 20px<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 700px<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token selector\\">.cancel</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> <span class=\\"token function\\">rgba</span><span class=\\"token punctuation\\">(</span>black<span class=\\"token punctuation\\">,</span> 0.7<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n</code></pre></div>","autoDesc":true}`);export{n as data};
