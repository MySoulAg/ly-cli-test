<template>
  <article>
    首页
    <button @click="del">删除</button>
    <button @click="add">+1</button>
    <p>父组件的数据：{{ num }}</p>
    <Dialog class="fegrgreg" ref="dialog"></Dialog>
    <!-- <Child :num="num"></Child> -->
  </article>
</template>
<script>
import Dialog from '@/components/Dialog.vue'
// import Child from '@/components/Child.vue'
export default {
  name: 'home',
  components: {
    Dialog
    // Child
  },
  data() {
    return {
      num: 0
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
  
    
  
}
</style>
