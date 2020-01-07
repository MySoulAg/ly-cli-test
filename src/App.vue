<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
    <GlobalMask></GlobalMask>
  </div>
</template>

<script>
import GlobalMask from '@/components/GlobalMask'
export default {
  name: 'app',
  components: {
    GlobalMask
  }
}
</script>

<style lang="scss">
@import '@/assets/css/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
