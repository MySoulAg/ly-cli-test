<template>
  <article>
    生活
    <my-tab></my-tab>
    <!-- <div class="md-example-child md-example-child-tabs md-example-child-tabs-0">
      <md-tabs>
        <md-tab-pane class="content" name="p1" label="第一章">
          她对他很满意。走吧。好。他起身买单，腿却一拐一拐的。难怪他才华横溢，事业有成，却还是单身。趁着他买单，她赶紧悄悄走了。
        </md-tab-pane>
        <md-tab-pane class="content" name="p2" label="第二章">
          又是一年，她又遇到了他，他正牵着孩子的手，走的飞快。
        </md-tab-pane>
        <md-tab-pane class="content" name="p3" label="第三章">
          你的腿？她有些诧异。腿？我的腿怎么了？他更诧异。后来，她才知道他的腿，那天只是坐麻了而已。
        </md-tab-pane>
      </md-tabs>
    </div> -->
  </article>
</template>
<script>
import Tab from '@/components/Tab.vue'
import { Tabs, TabPane } from 'mand-mobile'
export default {
  name: 'life',
  components: {
    'my-tab': Tab,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane
  },
  data() {
    return {}
  },

  methods: {}
}
</script>
<style lang="less" scoped>

</style>
