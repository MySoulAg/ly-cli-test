<template>
  <article>
    <van-popup :overlay-style='popupStyle' v-model="isShow">
        <img class="loading" src="@/assets/imgs/loading.gif" alt="" srcset="">
    </van-popup>
  </article>
</template>
<script>
import { Popup } from "vant";
export default {
  name: "globalMask",
  components: {
    [Popup.name]: Popup
  },
  data() {
    return {
      isShow: true,
      popupStyle:{
          background:'#fff'
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.loading {
    width: 100px;
}
</style>
