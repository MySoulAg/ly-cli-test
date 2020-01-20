<template>
  <article>
    <section class="tab-box">
      <ul class="tab" ref="tab">
        <li
          @click="changeTab(index)"
          :class="active == index ? 'active' : ''"
          v-for="(item, index) in tabList"
          :key="index"
        >{{ item.tab }}</li>
      </ul>
    </section>

    <section class="content-box">
      <div class="box">
        <transition name="slide-fade1">
          <div v-show="show" class="content">{{ tabList[active].content }}</div>
        </transition>
        <transition name="slide-fade1">
          <div v-show="!show" class="content">{{ tabList[active].content }}</div>
        </transition>
      </div>
    </section>
  </article>
</template>
<script>
export default {
  name: 'tab',
  data() {
    return {
      show: true,
      active: 0, //默认tab选中项
      tabList: [
        {
          tab: '关注',
          content: '关注'
        },
        {
          tab: '推荐',
          content: '推荐'
        },
        {
          tab: '视频',
          content: '视频'
        },
        {
          tab: '热点',
          content: '热点'
        },
        {
          tab: '漫画',
          content: '漫画'
        },
        {
          tab: '小视频',
          content: '小视频'
        },
        {
          tab: '美食',
          content: '美食'
        },
        {
          tab: '上海',
          content: '上海'
        },
        {
          tab: '娱乐',
          content: '娱乐'
        }
      ]
    }
  },

  mounted() {
    console.log()
  },

  methods: {
    changeTab(index) {
      this.active = index
      this.show = !this.show
    }
  }
}
</script>
<style lang="less" scoped>
.tab-box {
  padding: 5px 15px;

  .tab::-webkit-scrollbar {
    display: none;
  }
  .tab {
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    li {
      height: 30px;
      margin-left: 20px;
      font-size: 16px;
      line-height: 30px;
      transition: all 0.15s;
    }
    li:first-of-type {
      margin-left: 0;
    }

    li.active {
      color: rgb(240, 27, 27);
    }
  }
}

.content-box {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  position: relative;

  .box {
    width: 100%;
    // height: 100px;
    position: relative;
    // overflow: hidden;
  }

  .content {
    width: 100%;
    // width: calc(100%-30px);
    // height: 300px;
    background: #eee;

    position: absolute;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-fade1-enter-active {
  transition: all 0.3s ease;
}
.slide-fade1-leave-active {
  transition: all 0.3s ease;
}
.slide-fade1-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-fade1-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
