<template>
  <article>
    <div class="button-box">
      <button :class="classType">
        <span>
          <slot></slot>
        </span>
      </button>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'line1'
    }
  },
  computed: {
    classType() {
      const obj = {
        line1: 'btn-1', //样式1
        line2: 'btn-2', //样式2
        fill1: 'btn-3' //样式3
      }
      return obj[this.type]
    }
  }
}
</script>
<style lang='less' scoped>
button {
  padding: 0;
  position: relative;
  width: 100px;
  height: 40px;
  background: blueviolet;
  cursor: pointer;
  color: #fff;
  border: none;
  margin-right: 20px;
  margin-bottom: 20px;

  span {
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

button::before,
button::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: all 0.5s;
}

// line样式1
.btn-1::before,
.btn-1::after {
  height: 2px;
  left: 50%;
  width: 0;
  background: #f13f84;
  transform: translateX(-50%);
}

.btn-1::before {
  top: -2px;
}

.btn-1::after {
  bottom: -2px;
}

.btn-1:hover::before,
.btn-1:hover::after {
  width: 100%;
}

// line样式2
.btn-2 {
  background: blue;
  height: 36px;
  position: relative;
}

.btn-2::before,
.btn-2::after {
  content: '';
  z-index: -1;
  width: 10px;
  height: 10px;
  background: #f13f84;
}

.btn-2::before {
  left: -2px;
  top: -2px;
}

.btn-2::after {
  right: -2px;
  bottom: -2px;
}

.btn-2:hover::before,
.btn-2:hover::after {
  height: calc(~'100% + 4px');
  width: calc(~'100% + 4px');
}

//fill样式1
.btn-3 {
  border: none;
  background: none;
  width: 100px;
  height: 40px;
  border: 2px solid #96eab7;
  border-radius: 5px;
  color: #96eab7;
  font-weight: bold;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
}

.btn-3::after {
  content: '';
  width: 100%;
  height: 100%;
  background: #96eab7;
  position: absolute;
  left: -100%;
  top: 0;
  transition: all 0.5s;
  z-index: -1;
}
.btn-3::before {
  content: '';
  width: 100%;
  height: 100%;
  background: #96eab7;
  position: absolute;
  left: 100%;
  top: 0;
  transition: all 0.5s;
  z-index: -1;
}

.btn-3:hover::after {
  left: -50%;
}

.btn-3:hover::before {
  left: 50%;
}

.btn-3:hover {
  color: #333;
}
</style>