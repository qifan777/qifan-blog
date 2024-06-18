# 后端实现

## 实体设计

### 消息实体设计

消息表

```sql
create table ai_message
(
    id            varchar(36) not null
        primary key,
    created_time  datetime(6) not null,
    edited_time   datetime(6) not null,
    creator_id    varchar(32) not null,
    editor_id     varchar(32) not null,
    type          varchar(32) not null comment '消息类型(用户/ 助手/ 系统)',
    text_content  text        not null comment '消息内容',
    medias        json        null,
    ai_session_id varchar(32) not null comment '会话id'
);
```

消息实体类

```java
/**
 * 历史消息
 */ 
@Entity
public interface AiMessage extends BaseEntity {

    /**
     * 消息类型(用户/助手/系统)
     */
    MessageType type();

    /**
     * 消息内容
     */
    String textContent();

    @Serialized
    @Null
    List<Media> medias();

    @IdView
    String sessionId();

    /**
     * 会话
     */
    @ManyToOne
    @JoinColumn(name = "ai_session_id")
    @OnDissociate(DissociateAction.DELETE)
    AiSession session();

    @Data
    @AllArgsConstructor
    class Media {
        public String type;
        public String data;
    }
}

```

### 会话实体设计

会话表

```sql
create table ai_session
(
    id           varchar(36) not null
        primary key,
    created_time datetime(6) not null,
    edited_time  datetime(6) not null,
    creator_id   varchar(32) not null,
    editor_id    varchar(32) not null,
    name         varchar(32) not null comment '会话名称'
);
```

会话实体类

```java
/**
 * 会话
 */
@Entity
public interface AiSession extends BaseEntity {

    /**
     * 会话名称
     */
    String name();

    /**
     * 一对多关联消息，按创建时间升序
     */

    @OneToMany(mappedBy = "session", orderedProps = @OrderedProp(value = "createdTime"))
    List<AiMessage> messages();
}

```

## AiMessageChatMemory（数据库消息记录）

`AiMessageChatMemory`实现了`ChatMemory`接口，用于保存聊天记录到数据库。

```java
@Service
@AllArgsConstructor
public class AiMessageChatMemory implements ChatMemory {
    private final AiMessageRepository messageRepository;
    private final AiSessionRepository sessionRepository;

    /**
     * 将用户发送的消息和AI回复的消息保存到数据库
     *
     * @param conversationId 会话id
     * @param messages       org.springframework.ai.chat.messages.Message 用户发送的消息和AI回复的消息
     */
    @Override
    public void add(String conversationId, List<Message> messages) {
        List<AiMessage> aiMessageList = messages
                .stream()
                .map(message -> toAiMessage(message, conversationId))
                .toList();
        // 当前的现场处于异步状态，非没有servletRequest无法获取当前登录的用户信息。
        // 模拟请求
        RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(new MockHttpServletRequest()));
        // 设置当前的用id
        String userId = sessionRepository.findById(conversationId, AiSessionFetcher.$.creator()).orElseThrow().creator().id();
        StpUtil.switchTo(userId);
        // 保存到数据库，这样创建人和编辑人才有数据
        messageRepository.saveEntities(aiMessageList);
    }

    /**
     * 查询会话内的消息最新n条历史记录
     *
     * @param conversationId 会话id
     * @param lastN          最近n条
     * @return org.springframework.ai.chat.messages.Message格式的消息
     */
    @Override
    public List<Message> get(String conversationId, int lastN) {
        return messageRepository
                // 查询会话内的最新n条消息
                .findBySessionId(conversationId, lastN)
                .stream()
                // 转成Message对象
                .map(AiMessageChatMemory::toSpringAiMessage)
                .toList();
    }

    /**
     * 清除会话内的消息
     *
     * @param conversationId 会话id
     */
    @Override
    public void clear(String conversationId) {
        messageRepository.deleteBySessionId(conversationId);
    }
    /**
     * 忽略...
     */
}
```

可以把`AiMessageChatMemory`注入到`MessageChatMemoryAdvisor`中。

MessageChatMemoryAdvisor的作用有下面三个

1. 用户消息发送给大模型之前，获取会话内的最新n条记录和用户的消息拼接在一起，形成历史消息记录。
2. 拼接完历史消息之后把用户发送的消息保存到数据库。
3. 大模型回复完消息之后，将回复的消息保存到数据库。

```java
// 注入chatMemory
private final AiMessageChatMemory chatMemory;
// 传入chatMemory，会话id，查询最近n条历史消息
var messageChatMemoryAdvisor = new MessageChatMemoryAdvisor(chatMemory, input.getSessionId(), 10);
```

## 消息发送接口

通常来说发送消息给大模型只需要填写用户的消息就行，但是要支持历史会话需要获取历史消息。这个功能可以使用[MessageChatMemoryAdvisor](#aimessagechatmemory数据库消息记录)来实现。

```java
@RequestMapping("message")
@RestController
@AllArgsConstructor
@Slf4j
public class AiMessageController {
    private final AiMessageChatMemory chatMemory;
    private final DashScopeAiChatModel dashScopeAiChatModel;

    /**
     *
     * @param input 消息包含文本信息，会话id，多媒体信息（图片语言）。参考src/main/dto/AiMessage.dto
     * @return SSE流
     */
    @PostMapping(value = "chat", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServerSentEvent<String>> chatStreamWithHistory(@RequestBody AiMessageInput input) {
        // MessageChatMemoryAdvisor的三个参数解释。
        // 1. 如果需要存储会话和消息到数据库，自己可以实现ChatMemory接口，这里使用自己实现的AiMessageChatMemory，数据库存储。
        // 2. 传入会话id，MessageChatMemoryAdvisor会根据会话id去查找消息。
        // 3. 只需要携带最近10条消息
        var messageChatMemoryAdvisor = new MessageChatMemoryAdvisor(chatMemory, input.getSessionId(), 10);
        return ChatClient.create(dashScopeAiChatModel).prompt()
                .user(promptUserSpec -> {
                    // AiMessageInput转成Message
                    Message message = AiMessageChatMemory.toSpringAiMessage(input.toEntity());
                    if (!CollectionUtils.isEmpty(message.getMedia())) {
                        // 用户发送的图片/语言
                        Media[] medias = new Media[message.getMedia().size()];
                        promptUserSpec.media(message.getMedia().toArray(medias));
                    }
                    // 用户发送的文本
                    promptUserSpec.text(message.getContent());
                })
                // MessageChatMemoryAdvisor会在消息发送给大模型之前，从ChatMemory中获取会话的历史消息，然后一起发送给大模型。
                .advisors(messageChatMemoryAdvisor)
                .stream()
                .content()
                .map(chatResponse -> ServerSentEvent.builder(chatResponse)
                        // 和前端监听的事件相对应
                        .event("message")
                        .build());
    }
}
```
