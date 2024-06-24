const n=JSON.parse('{"key":"v-2a7b7551","path":"/project/spring-ai/knowledge.html","title":"知识库","lang":"zh-CN","frontmatter":{"description":"知识库 前端实现 参数面板参数面板 前端需要有一个知识库开关让用户决定本次的查询是否要使用知识库。也需要有一个上传文件的功能，提取出文件中的内容，然后转向量再存入向量数据库。 额外参数面板 这个面板可以放一些额外的参数，如后面还可以选择function call，设置模型参数等。 目前在这个面板我放了上传文档功能和知识库开关。 上传文件的时候要load...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/project/spring-ai/knowledge.html"}],["meta",{"property":"og:site_name","content":"起凡Code闲聊"}],["meta",{"property":"og:title","content":"知识库"}],["meta",{"property":"og:description","content":"知识库 前端实现 参数面板参数面板 前端需要有一个知识库开关让用户决定本次的查询是否要使用知识库。也需要有一个上传文件的功能，提取出文件中的内容，然后转向量再存入向量数据库。 额外参数面板 这个面板可以放一些额外的参数，如后面还可以选择function call，设置模型参数等。 目前在这个面板我放了上传文档功能和知识库开关。 上传文件的时候要load..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-24T06:11:39.000Z"}],["meta",{"property":"article:author","content":"起凡"}],["meta",{"property":"article:modified_time","content":"2024-06-24T06:11:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"知识库\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-24T06:11:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"起凡\\",\\"url\\":\\"https://www.jarcheng.top\\"}]}"]]},"headers":[{"level":2,"title":"前端实现","slug":"前端实现","link":"#前端实现","children":[{"level":3,"title":"额外参数面板","slug":"额外参数面板","link":"#额外参数面板","children":[]},{"level":3,"title":"发送消息携带额外的参数","slug":"发送消息携带额外的参数","link":"#发送消息携带额外的参数","children":[]}]},{"level":2,"title":"后端实现","slug":"后端实现","link":"#后端实现","children":[{"level":3,"title":"消息dto改造","slug":"消息dto改造","link":"#消息dto改造","children":[]},{"level":3,"title":"QuestionAnswerAdvisor","slug":"questionansweradvisor","link":"#questionansweradvisor","children":[]}]}],"git":{"createdTime":1719209499000,"updatedTime":1719209499000,"contributors":[{"name":"linjiacheng","email":"1507906763@qq.com","commits":1}]},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"project/spring-ai/knowledge.md","localizedDate":"2024年6月24日","excerpt":"\\n<h2>前端实现</h2>\\n<figure><figcaption>参数面板</figcaption></figure>\\n<p>前端需要有一个知识库开关让用户决定本次的查询是否要使用知识库。也需要有一个上传文件的功能，提取出文件中的内容，然后转向量再存入向量数据库。</p>\\n<h3>额外参数面板</h3>\\n<p>这个面板可以放一些额外的参数，如后面还可以选择<code>function call</code>，设置模型参数等。</p>\\n<p>目前在这个面板我放了上传文档功能和知识库开关。</p>\\n<div class=\\"language-html\\" data-ext=\\"html\\" data-title=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>option-panel<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-upload</span>\\n            <span class=\\"token attr-name\\">v-loading</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>embeddingLoading<span class=\\"token punctuation\\">\\"</span></span>\\n            <span class=\\"token attr-name\\">:action</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>`${API_PREFIX}/document/embedding`<span class=\\"token punctuation\\">\\"</span></span>\\n            <span class=\\"token attr-name\\">:show-file-list</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>false<span class=\\"token punctuation\\">\\"</span></span>\\n            <span class=\\"token attr-name\\">:on-success</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>onUploadSuccess<span class=\\"token punctuation\\">\\"</span></span>\\n            <span class=\\"token attr-name\\">:before-upload</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>beforeUpload<span class=\\"token punctuation\\">\\"</span></span>\\n        <span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-button</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>primary<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>上传文档<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-upload</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-form-item</span> <span class=\\"token attr-name\\">label</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>知识库<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>el-switch</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>options.enableVectorStore<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-switch</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form-item</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>el-form</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>","autoDesc":true}');export{n as data};
