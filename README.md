# docker-compose demo

## local dev & debug
```
# 👉👉 启动开发用 MongoDB（后台运行）
docker-compose -f docker-compose.dev.yml up -d
# 👉👉 停止开发用 MongoDB
docker-compose -f docker-compose.dev.yml down

manully bootstrap backend service

manully bootstrap frontend service
```


## deploy to test / preprod / prod env
```
# 👉👉 启动
docker-compose -f docker-compose.yml up -d
# 👉👉 停止开发用 MongoDB
docker-compose -f docker-compose.yml down
```