<template>
  <div id="app">
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
    <GlobalMask></GlobalMask>
  </div>
</template>

<script>
// 测试代码提交的修改test_dev
import GlobalMask from '@/components/GlobalMask'
export default {
  name: 'app',
  components: {
    GlobalMask
  },
  methods: {
    dfreg () {
      console.log('App')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
@import '@/assets/css/vant.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
