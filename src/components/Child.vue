<template>
  <article>子组件的数据{{value }}
    <input v-model="frgth" @input="input"/>
  </article>
</template>
<script>
export default {
  props:{
    value :{
      type:String
    }
  },
  data() {
    return {
      frgth:''
    }
  },

  created(){
    console.log(this.$parent.add)
  },

  methods:{
    input(){
      this.$emit('input',this.frgth)
    }
  }
}
</script>
<style lang="less" scoped></style>
