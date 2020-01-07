<template>
  <article>
    首页
    <button @click="del">删除</button>
    <Dialog ref="dialog"></Dialog>
    <div class="box" :style="'border-image: url('+borderImg+') 30 27 stretch'">

    </div>
  </article>
</template>
<script>
import Dialog from '@/components/Dialog.vue'
export default {
  name: 'home',
  components: {
    Dialog
  },
  data() {
    return {
      borderImg:require("@/assets/imgs/border-img.png")
    }
  },

  mounted() {},

  methods: {
    del() {
      this.$refs.dialog.trigger()
    }
  }
}
</script>
<style scoped>
.box {
  width: 345px;
  height: 200px;
  margin: 100px auto 0;
  background: #eeeeee;
  border: 35px solid transparent;
}
</style>
