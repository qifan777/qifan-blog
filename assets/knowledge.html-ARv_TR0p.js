import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as l,c as i,d as t,e as n,b as p,w as e,a as s}from"./app-UCWpdoSl.js";const u="/blog/assets/options-ivlaq_7S.png",r={},k=s('<h1 id="知识库" tabindex="-1"><a class="header-anchor" href="#知识库"><span>知识库</span></a></h1><h2 id="前端实现" tabindex="-1"><a class="header-anchor" href="#前端实现"><span>前端实现</span></a></h2><figure><img src="'+u+`" alt="参数面板" tabindex="0" loading="lazy"><figcaption>参数面板</figcaption></figure><p>前端需要有一个知识库开关让用户决定本次的查询是否要使用知识库。也需要有一个上传文件的功能，提取出文件中的内容，然后转向量再存入向量数据库。</p><h3 id="额外参数面板" tabindex="-1"><a class="header-anchor" href="#额外参数面板"><span>额外参数面板</span></a></h3><p>这个面板可以放一些额外的参数，如后面还可以选择<code>function call</code>，设置模型参数等。</p><p>目前在这个面板我放了上传文档功能和知识库开关。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-upload</span>
            <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>embeddingLoading<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`\${API_PREFIX}/document/embedding\`<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:show-file-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:on-success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onUploadSuccess<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:before-upload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>beforeUpload<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>上传文档<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-upload</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>知识库<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options.enableVectorStore<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-switch</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传文件的时候要loading一下，避免用户多次重复上传。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">API_PREFIX</span> <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_PREFIX</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  enableVectorStore<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> embeddingLoading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">onUploadSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  embeddingLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;上传成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> beforeUpload<span class="token operator">:</span> UploadProps<span class="token punctuation">[</span><span class="token string">&#39;beforeUpload&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  embeddingLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送消息携带额外的参数" tabindex="-1"><a class="header-anchor" href="#发送消息携带额外的参数"><span>发送消息携带额外的参数</span></a></h3><p>根据后端实现可以知道，前端发送消息的时候，需要携带额外的参数，这里我直接在<code>body</code>中添加了<code>params</code>字段。也就是是否启用知识库</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>     
  <span class="token keyword">const</span> body<span class="token operator">:</span> AiMessageWrapper <span class="token operator">=</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> chatMessage<span class="token punctuation">,</span> params<span class="token operator">:</span> options<span class="token punctuation">.</span>value <span class="token punctuation">}</span>
  <span class="token keyword">const</span> evtSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">SSE</span></span><span class="token punctuation">(</span><span class="token constant">API_PREFIX</span> <span class="token operator">+</span> <span class="token string">&#39;/message/chat&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    withCredentials<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用自动启动，需要调用stream()方法才能发起请求</span>
    start<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    payload<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=s(`<h2 id="后端实现" tabindex="-1"><a class="header-anchor" href="#后端实现"><span>后端实现</span></a></h2><h3 id="消息dto改造" tabindex="-1"><a class="header-anchor" href="#消息dto改造"><span>消息dto改造</span></a></h3><p>将之前的 <code>AiMessageInput</code> 改造成 <code>AiMessageWrapper</code>，新增了一个 <code>params</code> 属性，用来传递一些参数。前端可以选择是否开启知识库。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AiMessageWrapper</span> <span class="token punctuation">{</span>
    <span class="token class-name">AiMessageInput</span> message<span class="token punctuation">;</span>
    <span class="token class-name">AiMessageParams</span> params<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AiMessageParams</span> <span class="token punctuation">{</span>
    <span class="token class-name">Boolean</span> enableVectorStore<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="questionansweradvisor" tabindex="-1"><a class="header-anchor" href="#questionansweradvisor"><span>QuestionAnswerAdvisor</span></a></h3>`,5),v=s(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">input</span> 消息包含文本信息，会话id，多媒体信息（图片语言）。参考src/main/dto/AiMessage.dto
     * <span class="token keyword">@return</span> SSE流
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;chat&quot;</span><span class="token punctuation">,</span> produces <span class="token operator">=</span> <span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">TEXT_EVENT_STREAM_VALUE</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Flux</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ServerSentEvent</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">chatStreamWithHistory</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">AiMessageWrapper</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ChatClient</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>dashScopeAiChatModel<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span>promptUserSpec <span class="token operator">-&gt;</span> <span class="token function">toPrompt</span><span class="token punctuation">(</span>promptUserSpec<span class="token punctuation">,</span> input<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">advisors</span><span class="token punctuation">(</span>advisorSpec <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 使用历史消息</span>
                    <span class="token function">useChatHistory</span><span class="token punctuation">(</span>advisorSpec<span class="token punctuation">,</span> input<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSessionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// 如果启用向量数据库</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">getParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getEnableVectorStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// 使用向量数据库w</span>
                        <span class="token function">useVectorStore</span><span class="token punctuation">(</span>advisorSpec<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">chatResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>chatResponse <span class="token operator">-&gt;</span> <span class="token class-name">ServerSentEvent</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token function">toJson</span><span class="token punctuation">(</span>chatResponse<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token comment">// 和前端监听的事件相对应</span>
                        <span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">useVectorStore</span><span class="token punctuation">(</span><span class="token class-name">ChatClient<span class="token punctuation">.</span>AdvisorSpec</span> advisorSpec<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// question_answer_context是一个占位符，会替换成向量数据库中查询到的文档。QuestionAnswerAdvisor会替换。</span>
        <span class="token class-name">String</span> promptWithContext <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
                下面是上下文信息
                ---------------------
                {question_answer_context}
                ---------------------
                给定的上下文和提供的历史信息，而不是事先的知识，回复用户的意见。如果答案不在上下文中，告诉用户你不能回答这个问题。
                &quot;&quot;&quot;</span><span class="token punctuation">;</span>
        advisorSpec<span class="token punctuation">.</span><span class="token function">advisors</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QuestionAnswerAdvisor</span><span class="token punctuation">(</span>vectorStore<span class="token punctuation">,</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">.</span><span class="token function">defaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> promptWithContext<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(b,g){const a=c("RouterLink");return l(),i("div",null,[k,t("p",null,[n("后续的消息回复逻辑请参考"),p(a,{to:"/project/spring-ai/chat-page/frontend.html"},{default:e(()=>[n("聊天面板前端实现")]),_:1})]),d,t("p",null,[n("之前已经介绍过"),p(a,{to:"/project/spring-ai/rag.html"},{default:e(()=>[n("RAG")]),_:1}),n("，请参考之前的教程。")]),v])}const q=o(r,[["render",m],["__file","knowledge.html.vue"]]);export{q as default};