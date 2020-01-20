<template>
  <article>
    生活
    <my-tab></my-tab>
    <div class="input">
      <input
        type="text"
        v-model="msg"
        @keydown.delete="deletDown"
        @keyup.delete="deletUp"
        @input="inputMsg"
      />
      <span>{{info}}</span>
    </div>
    <div class="button-box">
      <Button type="line6">测试按钮</Button>
    </div>
  </article>
</template>
<script>
import Tab from '@/components/Tab.vue'
import Button from '@/components/Button.vue'
export default {
  name: 'life',
  components: {
    'my-tab': Tab,
    Button
  },
  data() {
    return {
      msg: '',
      info: '',
      isDeletUp: true
    }
  },

  methods: {
    inputMsg() {
      window.clearTimeout(window.timeOut)
      window.timeOut = window.setTimeout(() => {
        if (this.msg != '' && this.isDeletUp) {
          this.info = '正在校验姓名....'
          window.timeOut1 = window.setTimeout(() => {
            this.checkName(this.msg)
            window.clearTimeout(window.timeOut1)
          }, 1000)
        } else {
          this.info = ''
        }
      }, 500)
    },

    deletUp() {
      this.isDeletUp = true
    },

    deletDown() {
      this.isDeletUp = false
    },

    checkName(name) {
      if (name == 'admin') {
        this.info = '该用户名已经被注册！'
      } else {
        this.info = '该用户名可用'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input {
  padding: 20px;

  input {
    margin-top: 2px;
  }
}

.button-box {
  padding: 20px;
}


</style>