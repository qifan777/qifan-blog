import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-vpfr6vzx.js";const p="/blog/assets/image-n5bZTdKR.png",e="/blog/assets/image-1-uhps2IHD.png",o={},c=t('<h1 id="优惠券" tabindex="-1"><a class="header-anchor" href="#优惠券"><span>优惠券</span></a></h1><figure><img src="'+p+'" alt="优惠券创建（图1）" tabindex="0" loading="lazy"><figcaption>优惠券创建（图1）</figcaption></figure><figure><img src="'+e+`" alt="优惠券赠送（图2）" tabindex="0" loading="lazy"><figcaption>优惠券赠送（图2）</figcaption></figure><h2 id="表设计" tabindex="-1"><a class="header-anchor" href="#表设计"><span>表设计</span></a></h2><p>图1中的表单字段和优惠券表的字段可以一一对应。如果优惠类型是打折，那么<code>discount</code>字段就是必填，<code>amount</code>字段可为空。如果优惠券类型是满减，那么相反。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> coupon
<span class="token punctuation">(</span>
    id                <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span>
        <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    created_time      <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    edited_time       <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    creator_id        <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    editor_id         <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    name              <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span>   <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;优惠券名称&#39;</span><span class="token punctuation">,</span>
    threshold_amount  <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;使用门槛&#39;</span><span class="token punctuation">,</span>
    released_quantity <span class="token keyword">int</span>            <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;发放数量&#39;</span><span class="token punctuation">,</span>
    effective_date    <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;生效时间&#39;</span><span class="token punctuation">,</span>
    expiration_date   <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;失效时间&#39;</span><span class="token punctuation">,</span>
    coupon_type       <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;优惠类型（打折，满减）&#39;</span><span class="token punctuation">,</span>
    scope_type        <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span>    <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;使用范围（通用，指定商品，类别）&#39;</span><span class="token punctuation">,</span>
    amount            <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;优惠金额&#39;</span><span class="token punctuation">,</span>
    discount          <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;折扣&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">constraint</span> coupon_pk
        <span class="token keyword">unique</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
    <span class="token keyword">comment</span> <span class="token string">&#39;优惠券&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户优惠券关系表，优惠券的来源有很多种，可以使用<code>receive_type</code>表示。这边演示的来源方式只有后台赠送一种。如图2所示，在优惠券上点赠送按钮即可批量选择用户赠送优惠券。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> coupon_user_rel
<span class="token punctuation">(</span>
    id           <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span>
        <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
    created_time <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    edited_time  <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    creator_id   <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    editor_id    <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    receive_type <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;获得渠道（后台赠送，手动领取）&#39;</span><span class="token punctuation">,</span>
    coupon_id    <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;优惠券id&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">status</span>       <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;使用状态（待使用，已使用，过期）&#39;</span><span class="token punctuation">,</span>
    user_id      <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">&#39;用户id&#39;</span>
<span class="token punctuation">)</span>
    <span class="token keyword">comment</span> <span class="token string">&#39;用户优惠券&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优惠券赠送" tabindex="-1"><a class="header-anchor" href="#优惠券赠送"><span>优惠券赠送</span></a></h2><p>通过<code>&lt;user-choose-table&gt;&lt;/user-choose-table&gt;</code>组件加上注入<code>userTableHelper</code>提供用户表的分页查询，可以很方便的实习用户的d</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> UserChooseTable <span class="token keyword">from</span> <span class="token string">&#39;@/views/user/components/user-choose-table.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Present <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> api <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/api-instance&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTableHelper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/base/table/table-helper&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

<span class="token keyword">const</span> userTableHelper <span class="token operator">=</span> <span class="token function">useTableHelper</span><span class="token punctuation">(</span>
  api<span class="token punctuation">.</span>userForAdminController<span class="token punctuation">.</span>query<span class="token punctuation">,</span>
  api<span class="token punctuation">.</span>userForAdminController<span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;userTableHelper&#39;</span><span class="token punctuation">,</span> userTableHelper<span class="token punctuation">)</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">couponId</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleConfirm</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> api<span class="token punctuation">.</span>couponForAdminController<span class="token punctuation">.</span><span class="token function">gift</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">userIds</span><span class="token operator">:</span> userTableHelper<span class="token punctuation">.</span><span class="token function">getTableSelectedRows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> row<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> props<span class="token punctuation">.</span>couponId
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;赠送成功&#39;</span><span class="token punctuation">)</span>
  visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleOpen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  visible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  userTableHelper<span class="token punctuation">.</span><span class="token function">reloadTableData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">link</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleOpen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>present</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>present</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span> <span class="token attr-name">append-to-body</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-choose-table</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user-choose-table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleConfirm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>确认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[c];function u(i,k){return s(),a("div",null,l)}const m=n(o,[["render",u],["__file","coupon.html.vue"]]);export{m as default};
