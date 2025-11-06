const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Tips: 用 process.env.MONGO_URL 兼容：部署时通过 Docker Compose 传入 MONGO_URL，本地开发时用默认的 localhost:27017
// const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/testdb';

// 连接 MongoDB（注意：这里的地址是 Docker Compose 中的服务名 my-mongo）
mongoose.connect('mongodb://my-mongo:27017/testdb')
  .then(() => console.log('MongoDB 连接成功'))
  .catch(err => console.error('MongoDB 连接失败', err));

// 定义测试模型
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  age: Number
}));

// 允许跨域
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// API 接口：新增用户
app.get('/api/user', async (req, res) => {
  const user = new User({ name: '测试用户', age: 25 });
  await user.save();
  res.send({ code: 200, message: '用户创建成功', data: user });
});

// API 接口：查询所有用户
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.send({ code: 200, data: users });
});

app.listen(port, () => {
  console.log(`后端服务启动在 http://localhost:${port}`);
});