<template>
  <article>
    <van-dialog
      @cancel="cancel"
      v-model="isShow"
      title="标题"
      show-cancel-button
    >
     <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
    <h4>
      <p>gerhethehgerhethehgerhethehgerhethehgerhethehgerhethehgerhethehgerhethehgerheth</p>
    </h4>
    
    </van-dialog>
  </article>
</template>
<script>
import { Dialog } from 'vant'
export default {
  name: 'child',
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  props: {},
  data() {
    return {
      isShow: false
    }
  },
  watch:{
    isShow(){
      window.console.log(1651)
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
    cancel() {
      this.$nextTick(() => {
        window.console.log(this.isShow)
      })
    }
  }
}
</script>
<style lang="less" scoped>
p {

  height: 80px;
  width: 100%;
}
img {
  width: 100%;
}
</style>
