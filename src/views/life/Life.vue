<template>
  <article>
    生活
    <my-tab></my-tab>
    <!-- <h1 class="animation">动画Animation</h1> -->
    <div class="img animation">
      <img src="@/assets/imgs/open.png" alt="" />
    </div>
  </article>
</template>
<script>
import Tab from '@/components/Tab.vue'
export default {
  name: 'life',
  components: {
    'my-tab': Tab
  },
  data() {
    return {}
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/animation.scss';
.img {
  width: 70px;
  height: 70px;
  margin: 100px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.animation {
  animation: jello 0.5s;
  animation-iteration-count: infinite;
}

</style>
1