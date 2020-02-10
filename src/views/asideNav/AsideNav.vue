<template>
  <article>
    <header>
      <h1>头部固定栏</h1>
    </header>
    <aside>
      <ol>
        <li @click="jump(index)" v-for="(item,index) in 20" :key="item">导航标题{{item}}</li>
      </ol>
    </aside>
    <div class="contain" ref="contain">
      <main>
        <h1 :ref="'title'+ index" v-for="(item,index) in 20" :key="item">页面标题{{item}}</h1>
      </main>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      tem: 50,
      arr: []
    }
  },

  mounted() {
    for (let i = 0; i < 20; i++) {
      this.arr.push(this.$refs['title' + i][0].offsetTop)
    }
  },

  methods: {
    jump(index) {
      let local = this.tem
      let will = this.arr[index]
      this.tem = will
      console.log(local, will)
      window.clearInterval(window.sef)
      this.scoll(local, will)
    },

    scoll(local, will, time = 800) {
      let cha = will - local
      let step = cha / (time / 10)

      let promise = new Promise(function(reserve) {
        window.sef = window.setInterval(() => {
          if (
            (cha > 0 && window.pageYOffset > will) ||
            (cha < 0 && window.pageYOffset < will) ||
            step == 0
          ) {
            window.clearInterval(window.sef)
            reserve()
          }
          window.scrollBy(0, step)
        }, 1)
      })
      
      promise.then(function() {
        window.scrollTo(0, will - 50)
      })
    }
  }
}
</script>
<style scoped>
header {
  width: 100%;
  height: 50px;
  background: rgb(224, 224, 224);
  box-shadow: 0 0 10px 2px rgb(192, 192, 192);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}

header h1 {
  margin: 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

aside {
  width: 300px;
  height: calc(100vh - 50px);
  position: fixed;
  left: 0;
  top: 50px;
  overflow-y: scroll;
  background: rgb(131, 123, 138);
  z-index: 2;
}

aside ol li {
  margin: 50px 0;
  text-align: center;
}

aside ol li:hover {
  background: rgb(240, 175, 175);
  cursor: pointer;
}

.contain {
  padding-left: 300px;
  padding-top: 50px;
}

main {
  box-sizing: border-box;
  width: calc(100vw - 317px);
  background: rgb(144, 190, 126);
  padding-left: 50px;
}

main h1 {
  margin-top: 500px;
}

main h1:first-child {
  margin-top: 0;
}
</style>