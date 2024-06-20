# 前端实现

前端需要有一个知识库开关让用户决定本次的查询是否要使用知识库。也需要有一个上传文件的功能，提取出文件中的内容，然后转向量再存入向量数据库。

## 额外参数面板

这个面板可以放一些额外的参数，如后面还可以选择`function call`，设置模型参数等。

目前在这个面板我放了上传文档功能和知识库开关。

```html
<div class="option-panel">
    <el-form>
        <el-form-item>
        <el-upload
            v-loading="embeddingLoading"
            :action="`${API_PREFIX}/document/embedding`"
            :show-file-list="false"
            :on-success="onUploadSuccess"
            :before-upload="beforeUpload"
        >
            <el-button type="primary">上传文档</el-button>
        </el-upload>
        </el-form-item>
        <el-form-item label="知识库">
        <el-switch v-model="options.enableVectorStore"></el-switch>
        </el-form-item>
    </el-form>
</div>
```

上传文件的时候要loading一下，避免用户多次重复上传。

```ts
const API_PREFIX = import.meta.env.VITE_API_PREFIX
const options = ref({
  enableVectorStore: false
})
const embeddingLoading = ref(false)
const onUploadSuccess = () => {
  embeddingLoading.value = false
  ElMessage.success('上传成功')
}
const beforeUpload: UploadProps['beforeUpload'] = (file) => {
  embeddingLoading.value = true
  return true
}
```

## 发送消息携带额外的参数

根据后端实现可以知道，前端发送消息的时候，需要携带额外的参数，这里我直接在`body`中添加了`params`字段。也就是是否启用知识库

```ts
     
  const body: AiMessageWrapper = { message: chatMessage, params: options.value }
  const evtSource = new SSE(API_PREFIX + '/message/chat', {
    withCredentials: true,
    // 禁用自动启动，需要调用stream()方法才能发起请求
    start: false,
    headers: { 'Content-Type': 'application/json' },
    payload: JSON.stringify(body),
    method: 'POST'
  })
```

后续的消息回复逻辑请参考[聊天面板前端实现](../chat-page/frontend.md)
