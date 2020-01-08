<template>
  <article></article>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "child",
  data(){
    return {
      gegrhbre:"测试数据"
    }
  },
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
