<template>
  <article>子组件的数据:{{ num }}</article>
</template>
<script>
export default {
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped></style>
