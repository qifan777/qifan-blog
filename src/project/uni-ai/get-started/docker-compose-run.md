---
order: 1
---

# Docker Compose运行

## 获取源码

```shell
git clone  https://github.com/qifan777/uni-ai
```

## 运行DockerCompose

```shell
cd uni/uni-ai-backend/scrips
docker-compose up -d
```

## 导入数据库

用可视化工具连接`localhost:3308`，用户名：`root`，密码：`123456`。
在`uni_ai`库下执行`uni-ai-backend/scripts/database.sql`。

## 访问

访问`http://localhost:8877`。

## API-KEY配置

请参考[API-KEY配置](./use.md/#ai厂商密钥配置)。
