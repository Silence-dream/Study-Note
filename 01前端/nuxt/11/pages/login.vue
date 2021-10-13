<template>
  <div>
    <p>用户名:<input type="text" /></p>
    <p>密码:<input type="password" /></p>
    <input type="submit" value="登录" @click="login" />
  </div>
</template>

<script>
const  Cookie = require('js-cookie');
export default {
  methods: {
    login() {
      setTimeout(() => {
        const token = "alskdsajndkjasdkashdashdasashdaskhdasdasasdas";
        this.$store.commit("setAuth", token);
        Cookie.set('token',token)
        this.$router.push('/')
      }, 1000);
    },
  },
};
</script>
