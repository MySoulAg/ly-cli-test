<template>
  <article>
    <section class="tab-box">
      <ul class="tab">
        <li
          @click="changeTab(index, $event)"
          :class="active == index ? 'active' : ''"
          v-for="(item, index) in tabList"
          :key="index"
        >
          {{ item.tab }}
        </li>
      </ul>
    </section>

    <section class="content-box">
      <ul class="content" ref="ul">
        <li
          :style="{ display: active == index ? 'block' : 'none' }"
          ref="item"
          class="item"
          v-for="(item, index) in tabList"
          :key="index"
        >
          {{ item.content }}
        </li>
      </ul>
    </section>
  </article>
</template>
<script>
export default {
  name: 'tab',
  data() {
    return {
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

  methods: {
    changeTab(index) {
      this.active = index
      console.log(this.$refs['item'])
      console.log(this.$refs.ul)
      // console.log(ev.currentTarget.parentElement.getBoundingClientRect())
      // console.log(ev.target.getBoundingClientRect())
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

  .content {
    
    li {
      transition: all 1s;
    }
  }
}
</style>
