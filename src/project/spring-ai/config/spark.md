---
order: 6
---
# 讯飞星火接入

## 通用配置

请参考[通用配置](../config/base.md)

## 依赖配置

```xml
<dependency>
    <groupId>io.github.qifan777</groupId>
    <artifactId>spring-ai-spark-spring-boot-starter</artifactId>
</dependency>
```

## 密钥配置

[api-key、api-secret、appid申请地址](https://console.xfyun.cn/app/myapp)

```yml
spring:
  ai:
    # 讯飞星火
    spark:
      chat:
        api-key: xxx
        api-secret: xxx
        appid: xxx
        enabled: true
        options:
          # 设置模型的domain
          domain: generalv3.5
          # 设置模型的baseUrl
          base-url: https://spark-api.xf-yun.com/v3.5/chat
```

## 模型使用

```java
private final SparkAiChatModel sparkAiChatModel;
```

## 消息发送案例

请参考[消息发送](../chat.md)
