<template>
  <article>
    <ul>
      <li>
        <div class="left"></div>
        <div class="right">
          <h3>里调适指南期间指南年调适指南期间指南年人人心里调适指南疫情期间老年人心里调适指南</h3>
          <div class="bottom">
            <span class="sore">来源：国家卫建委国家卫建委国家卫建委国家卫建委</span>
            <span class="time">2020-02-02</span>
          </div>
        </div>
      </li>
    </ul>
    
  </article>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      
    }
  },

  
}
</script>
<style lang="scss" scoped>
article {
  padding: 15px;
  background-color: #999;
}

ul {
  li {
    display: flex;
    .left {
      width: 80px;
      height: 80px;
      background: #eee;
    }

    .right {
      flex: 1;
      min-height: 100%;
      margin-left: 10px;
      // background: #eee;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        margin: 0;
        font-weight: normal;
        font-size: 13px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding-top: 5px;
        text-align: justify;
      }

      .bottom {
        display: flex;
        padding: 10px 0;
        span {
          font-size: 12px;
        }

        .sore {
          flex: 1;
          text-align: justify;
          -webkit-line-clamp: 1;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .time {
          white-space: normal;
          padding-left: 5px;
        }
      }
    }
  }
}


</style>