<template>
  <article>
    首页
    <button @click="del">删除</button>
    <GlobalMask></GlobalMask>
    <Dialog ref="dialog"></Dialog>

  </article>
</template>
<script>
import Dialog from '@/components/Dialog.vue'
import GlobalMask from '@/components/GlobalMask'
export default {
  name: 'home',
  components: {
    Dialog,
    GlobalMask
  },
  data() {
    return {}
  },

  mounted() {
    window.console.log(this.$children[0])
  },

  methods: {
    del() {
      this.$refs.dialog.trigger()
      window.console.log(this.$refs.dialog)
    }
  }
}
</script>
<style scoped>

</style>
