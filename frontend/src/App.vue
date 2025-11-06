<template>
  <div id="app">
    <h1>多服务联动测试</h1>
    <button @click="createUser">添加一个mock用户</button>
    <div>{{ JSON.stringify(newUser) }}</div>
    <button @click="fetchUsers">获取用户列表</button>
    <ul>
      <li v-for="user in users" :key="user._id">{{ user.name }} - {{ user.age }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { users: [], newUser: null };
  },
  methods: {
    async createUser() {
      const res = await fetch('http://localhost:3000/api/user');
      const data = await res.json();
      this.newUser = data.data;
    },
    async fetchUsers() {
      const res = await fetch('http://localhost:3000/api/users');
      const data = await res.json();
      this.users = data.data;
    }
  }
};
</script>
