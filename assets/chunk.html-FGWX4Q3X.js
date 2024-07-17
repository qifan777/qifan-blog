import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-UCWpdoSl.js";const p={},e=t(`<h1 id="chunk构建" tabindex="-1"><a class="header-anchor" href="#chunk构建"><span>Chunk构建</span></a></h1><h2 id="构建chunk节点" tabindex="-1"><a class="header-anchor" href="#构建chunk节点"><span>构建Chunk节点</span></a></h2><p>节点定义</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Builder</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Node</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Chunk</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token comment">// 切割后的文本</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> text<span class="token punctuation">;</span>
    <span class="token comment">// item1, item1a, item7, item7a</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> item<span class="token punctuation">;</span>
    <span class="token comment">// Chunk序列号</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> chunkSeqId<span class="token punctuation">;</span>
    <span class="token comment">// 属于的Form</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> formId<span class="token punctuation">;</span>
    <span class="token comment">// text的embedding</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Double</span><span class="token punctuation">&gt;</span></span> textEmbedding<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>读取form10k文件夹下的json文件，每个json文件就代表一个form10k报表信息</li><li>将form10k的json文件解析成Chunk节点，每个item会变解析成一个<code>List&lt;Chunk&gt;</code>，因此一个form节点有4个<code>List&lt;Chunk&gt;</code>。</li><li>将每个Chunk节点保存到neo4j中。</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 创建Chunk节点，
     */</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;node&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> fileDir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;F:\\\\workspace\\\\code\\\\learn\\\\sec-edgar-notebooks\\\\data\\\\sample\\\\form10k&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> fileDir<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> file <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            chunkRepository<span class="token punctuation">.</span><span class="token function">saveAll</span><span class="token punctuation">(</span><span class="token function">fileToChunkList</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 解析form10k的中的item属性切割成Chunk
     *
     * <span class="token keyword">@param</span> <span class="token parameter">file</span> form10k的json文件
     * <span class="token keyword">@return</span> Chunk节点
     */</span>
    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Chunk</span><span class="token punctuation">&gt;</span></span> <span class="token function">fileToChunkList</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ObjectNode</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readValue</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token class-name">ObjectNode</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 每个form10k有item1，item1a，item7，item7a四种文本信息，都需要将切割</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;item1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;item1a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;item7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;item7a&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Chunk</span><span class="token punctuation">&gt;</span></span> chunks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> item <span class="token operator">:</span> items<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> text <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">asText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 切割文本成</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> documents <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TokenTextSplitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 最多不超过20 Chunk</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> chunkSeqId <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> chunkSeqId <span class="token operator">&lt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>documents<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> chunkSeqId<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> formId <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                chunks<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Chunk</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;%s-%s-chunk%04d&quot;</span><span class="token punctuation">.</span><span class="token function">formatted</span><span class="token punctuation">(</span>formId<span class="token punctuation">,</span> item<span class="token punctuation">,</span> chunkSeqId<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">chunkSeqId</span><span class="token punctuation">(</span>chunkSeqId<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">formId</span><span class="token punctuation">(</span>formId<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>documents<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>chunkSeqId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> chunks<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chunk链接创建" tabindex="-1"><a class="header-anchor" href="#chunk链接创建"><span>Chunk链接创建</span></a></h2><p>上面已经将Chunk节点保存到neo4j中，下面需要将同一个item的Chunk节点链接起来。</p><ol><li>查询所有的formId</li><li>查询每个formId下item1，item1a，item7，item7a四种文本信息对应的Chunk列表</li><li>然后按照chunkSeqId进行排序，然后通过<code>apoc.nodes.link</code>创建连接</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> formIds <span class="token operator">=</span> neo4jClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;match (c:Chunk) return distinct c.formId as formId&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">fetchAs</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 每个form10k有item1，item1a，item7，item7a四种文本信息，都需要将切割后的Chunk通过NEXT关联起来</span>
        formIds<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>formId <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;item1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;item1a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;item7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;item7a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                neo4jClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
                                MATCH (c:Chunk) // 匹配所有的节点
                                WHERE c.formId = $formId // 属于同一个form和同一个item的节点
                                  AND c.item = $item
                                WITH c
                                  ORDER BY c.chunkSeqId ASC // 根据seqId排序一下节点
                                WITH collect(c) as section_chunk_list // 转成list
                                  CALL apoc.nodes.link(section_chunk_list, &quot;NEXT&quot;, {avoidDuplicates: true}) // 节点之间依按顺序创建连接
                                RETURN size(section_chunk_list)
                                &quot;&quot;&quot;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>formId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token string">&quot;formId&quot;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token string">&quot;item&quot;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chunk嵌入" tabindex="-1"><a class="header-anchor" href="#chunk嵌入"><span>Chunk嵌入</span></a></h2><p>对所有Chunk进行embedding，neo4j中支持向量索引，只有创建索引之后才可以查询相似的向量</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;embedding&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">createEmbedding</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 随便将一段文本转成向量，看看这个嵌入模型的向量维度是多少</span>
        <span class="token keyword">int</span> dimension <span class="token operator">=</span> embeddingModel<span class="token punctuation">.</span><span class="token function">embed</span><span class="token punctuation">(</span><span class="token string">&quot;你好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 在Chunk节点创建索引，使用cosine求向量之间的相似度</span>
        neo4jClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
                        CREATE VECTOR INDEX \`form_10k_chunks\` IF NOT EXISTS
                        FOR (c:Chunk) ON (c.textEmbedding)
                        OPTIONS { indexConfig: {
                        \`vector.dimensions\`: $dimensions,
                        \`vector.similarity_function\`: &#39;cosine&#39;
                        }}
                        &quot;&quot;&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>dimension<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span><span class="token string">&quot;dimensions&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 对那些没有嵌入的Chunk进行embedding</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Chunk</span><span class="token punctuation">&gt;</span></span> waitToEmbedList <span class="token operator">=</span> chunkRepository<span class="token punctuation">.</span><span class="token function">findByTextEmbeddingIsNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        waitToEmbedList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>chunk <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">//  调用嵌入模型将文本转向量</span>
            chunk<span class="token punctuation">.</span><span class="token function">setTextEmbedding</span><span class="token punctuation">(</span>embeddingModel<span class="token punctuation">.</span><span class="token function">embed</span><span class="token punctuation">(</span>chunk<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        chunkRepository<span class="token punctuation">.</span><span class="token function">saveAll</span><span class="token punctuation">(</span>waitToEmbedList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[e];function c(i,u){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","chunk.html.vue"]]);export{d as default};