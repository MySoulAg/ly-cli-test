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
<style lang="less" scoped>
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

@keyframes jello {
  11.1% {
    transform: scale(1, 1);
  }

  22.2% {
    transform: scale(1.04, 1.04);
  }

  33.3% {
    transform: scale(1.08, 1.08);
  }

  44.4% {
    transform: scale(1.10, 1.10);
  }

  55.5% {
    transform: scale(1.10, 1.10);
  }

  66.6% {
    transform: scale(1.10, 1.10);
  }

  77.7% {
    transform: scale(1.08, 1.08);
  }

  88.8% {
    transform: scale(1.04, 1.04);
  }

  88.8% {
    transform: scale(1, 1);
  }
}
</style>
1