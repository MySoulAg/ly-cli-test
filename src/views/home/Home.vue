<template>
  <article>
    首页
    <button @click="del">删除</button>
    <button @click="add">+1</button>
    <p>父组件的数据：{{ num }}</p>
    <Dialog class="fegrgreg" ref="dialog"></Dialog>
    <Child :num="num"></Child>
    <img v-lazy="item" alt="" v-for="(item, index) in imgList" :key="index" />
  </article>
</template>
<script>
import Dialog from '@/components/Dialog.vue'
import Child from '@/components/Child.vue'
export default {
  name: 'home',
  components: {
    Dialog,
    Child
  },
  data() {
    return {
      num: 0,
      imgList: [
        'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2080745074,2793209448&fm=26&gp=0.jpg',
        'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229864841,4232235061&fm=26&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg',
        'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg',
        'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1719063513,2559625643&fm=26&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2080745074,2793209448&fm=26&gp=0.jpg',
        'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3381573685,1866477444&fm=26&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229864841,4232235061&fm=26&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg',
        'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg',
        'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1719063513,2559625643&fm=26&gp=0.jpg'
      ]
    }
  },

  methods: {
    del() {
      this.$refs.dialog.show()
    },
    add() {
      this.num++
    },
    notShow() {}
  }
}
</script>
<style lang="less" scoped>
article {
  img {
    width: 50%;
  }
}
</style>
