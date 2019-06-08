<template>
  <div id="app">
    <div class="header">
      <p class="title">
        Не пропусти!
      </p>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    components:{
    }
  }
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header{
  width: 100%;
  background: linear-gradient(77.07deg, #BB63FF 0%, #8B5AF0 100%);
  padding: 31px 0 31px 28px;
  display: flex;
  .title{
    color: #ffffff;
    margin: 0;
  }
}
</style>
