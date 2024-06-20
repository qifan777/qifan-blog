# 后端实现

## 消息dto改造

将之前的 `AiMessageInput` 改造成 `AiMessageWrapper`，新增了一个 `params` 属性，用来传递一些参数。前端可以选择是否开启知识库。

```java
@Data
public class AiMessageWrapper {
    AiMessageInput message;
    AiMessageParams params;
}
@Data
public class AiMessageParams {
    Boolean enableVectorStore;
}
```

## QuestionAnswerAdvisor

之前已经介绍过[RAG](../rag.md)，请参考之前的教程。

```java

    /**
     * @param input 消息包含文本信息，会话id，多媒体信息（图片语言）。参考src/main/dto/AiMessage.dto
     * @return SSE流
     */
    @PostMapping(value = "chat", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServerSentEvent<String>> chatStreamWithHistory(@RequestBody AiMessageWrapper input) {
        return ChatClient.create(dashScopeAiChatModel).prompt()
                .user(promptUserSpec -> toPrompt(promptUserSpec, input.getMessage()))
                .advisors(advisorSpec -> {
                    // 使用历史消息
                    useChatHistory(advisorSpec, input.getMessage().getSessionId());
                    // 如果启用向量数据库
                    if (input.getParams().getEnableVectorStore()) {
                        // 使用向量数据库w
                        useVectorStore(advisorSpec);
                    }
                })
                .stream()
                .chatResponse()
                .map(chatResponse -> ServerSentEvent.builder(toJson(chatResponse))
                        // 和前端监听的事件相对应
                        .event("message")
                        .build());
    }
    
    public void useVectorStore(ChatClient.AdvisorSpec advisorSpec) {
        // question_answer_context是一个占位符，会替换成向量数据库中查询到的文档。QuestionAnswerAdvisor会替换。
        String promptWithContext = """
                下面是上下文信息
                ---------------------
                {question_answer_context}
                ---------------------
                给定的上下文和提供的历史信息，而不是事先的知识，回复用户的意见。如果答案不在上下文中，告诉用户你不能回答这个问题。
                """;
        advisorSpec.advisors(new QuestionAnswerAdvisor(vectorStore, SearchRequest.defaults(), promptWithContext));
    }
```
