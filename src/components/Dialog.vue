<template>
  <article></article>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "child",
  methods: {
    trigger() {
      Dialog.confirm({
        title: "标题",
        message: "弹窗内容"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<style lang="less" scoped></style>
