# V2fly内网穿透

```shell
docker run -d --name v2ray \
 -v /path/to/config.json:/etc/v2ray/config.json \
 -p 10086:10086 \
 v2fly/v2fly-core \
 run -c /etc/v2ray/config.json \
```