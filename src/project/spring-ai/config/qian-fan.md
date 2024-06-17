---
order: 4
---
# 千帆（文言一心）接入

## 通用配置

请参考[通用配置](../config/base.md)

## 依赖配置

```xml
<dependency>
    <groupId>io.github.qifan777</groupId>
    <artifactId>spring-ai-qianfan-spring-boot-starter</artifactId>
</dependency>
```

## 密钥配置

[千帆 access-key和secret-key申请](https://console.bce.baidu.com/iam/#/iam/accesslist)

```yml
spring:
  ai:
    # 百度千帆
    qian-fan:
      access-key: xxx
      secret-key: xxx
      enabled: true
      chat:
        model: ERNIE-4.0-8K
```

## 使用

```java
private final QianFanAiChatModel qianFanAiChatModel;
```

## 消息发送案例

请参考[消息发送](../chat/README.md)
