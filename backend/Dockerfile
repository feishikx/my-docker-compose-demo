# 基础镜像：用 Node.js 16 轻量版本（和前端、Rocket.Chat 兼容）
FROM node:16-alpine

# 设定工作目录（和前端一致，规范路径）
WORKDIR /app

# 复制 package.json 和 package-lock.json（先复制依赖配置，利用缓存）
COPY package*.json ./

# 安装依赖（alpine 镜像缺一些系统依赖，需额外安装 git 等，否则 mongoose 可能安装失败）
RUN apk add --no-cache git && npm install

# 复制后端所有代码到容器内 /app 目录
COPY . .

# 暴露后端服务端口（和 index.js 里的 port 一致，都是 3000）
EXPOSE 3000

# 容器启动命令（启动后端服务）
CMD ["npm", "start"]