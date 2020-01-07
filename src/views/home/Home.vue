<template>
  <article>
    首页
    <button @click="del">删除</button>
    <Dialog ref="dialog"></Dialog>
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
    return {}
  },

  mounted() {},

  methods: {
    del() {
      this.$refs.dialog.trigger()
    }
  }
}
</script>
<style scoped></style>
