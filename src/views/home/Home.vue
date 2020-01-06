<template>
  <article>
    首页
  </article>
</template>
<script>

export default {
  name: "home",
  data() {
    return {
      
    };
  },

  mounted(){
    window.setTimeout(()=>{
      this.$store.commit("isShow",false)
    },2000)
    window.console.log(this.$store.state.mask)
    window.console.log(this.$store.state.test)
  },

};
</script>
<style scoped></style>
