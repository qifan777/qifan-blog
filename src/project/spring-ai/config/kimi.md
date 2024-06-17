---
order: 5
---
# Kimi接入

## 通用配置

请参考[通用配置](../config/base.md)

## 依赖配置

```xml
<dependency>
    <groupId>io.github.qifan777</groupId>
    <artifactId>spring-ai-kimi-spring-boot-starter</artifactId>
</dependency>
```

## 密钥配置

[kimi api-key申请](https://platform.moonshot.cn/console/api-keys)

```yml
spring:
  ai:
    # kimi
    kimi:
      api-key: xxx
      enabled: true
      chat:
        model: moonshot-v1-32k
```

## 使用

```java
private final KimiAiChatModel kimiAiChatModel;
```

## 消息发送案例

请参考[消息发送](../chat/README.md)
