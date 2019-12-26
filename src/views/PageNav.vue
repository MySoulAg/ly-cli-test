<template>
  <article>
    <h3>页面导航</h3>
    <ul>
      <li
        @click="goPage(item.path)"
        v-for="(item, index) in navList"
        :key="index"
      >
        {{ item.title }}
      </li>
    </ul>
  </article>
</template>
<script>
export default {
  name: "pageNav",
  data() {
    return {
      navList: [
        {
          title: "首页",
          path: "/home"
        },
        {
          title: "生活",
          path: "/life"
        }
      ]
    };
  },

  mounted:{
    
  },

  methods: {
    goPage(path) {
      window.location.href = `${window.location.protocol}//${window.location.host}${path}`;
    }
  }
};
</script>
<style scoped lang="scss">
article {
  h3 {
    font-size: 20px;
    text-align: center;
  }

  ul {
    li {
      padding: 3px 10px;
    }

    li:hover {
      background: #f5f5f5;
    }
  }
}
</style>
