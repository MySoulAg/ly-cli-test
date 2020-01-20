<template>
  <article>
    <div class="button-box">
      <button :class="classType">
        <span v-if="classType=='btn-3'||classType=='btn-6'">
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
        line3: 'btn-3', //样式3
        line4: 'btn-4', //样式4
        line5: 'btn-5', //样式5
        line6: 'btn-6', //样式6
        fill1: 'btn-fill-1' //fill样式1
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
  // background: blueviolet;
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

// line样式3
button span:before, 
button span:after{
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: all .5s;
}
.btn-3{
  background: yellow;
  height: 36px;
  color: #f13f84;
}
.btn-3:before, 
.btn-3:after, 
.btn-3 span:before, 
.btn-3 span:after{
  width: 10px;
  height: 10px;
  background: #f13f84;
  // mix-blend-mode: hue;
  content: '';
  z-index: -1;
}
.btn-3:before {
  left: -2px;
  top: -2px;
}
.btn-3:after {
  right: -2px;
  top: -2px;
}
.btn-3 span:before {
  left: -2px;
  bottom: -2px;
}
.btn-3 span:after {
  right: -2px;
  bottom: -2px;
}
.btn-3:hover:before, 
.btn-3:hover:after,
.btn-3:hover span:before,
.btn-3:hover span:after {
  height: 60%;
  width: 60%;
}

//line样式4
.btn-4{
  height: 34px;
  border: 1px solid #f13f84;
}
.btn-4:before, 
.btn-4:after{
  width: 10px;
  height: 10px;
  border-style: solid;
  border-color: #f13f84;
}
.btn-4:before {
  left: -4px;
  top: -4px;
  border-width: 1px 0 0 1px;
}
.btn-4:after {
  right: -4px;
  bottom: -4px;
  border-width: 0 1px 1px 0;
}
.btn-4:hover:before, 
.btn-4:hover:after{
  height: calc(100% + 7px);
  width: calc(100% + 7px);
}

//line样式5
.btn-5{
  background: #333;
  height: 34px;
  border: 1px solid #fff;
}
.btn-5:before, 
.btn-5:after{
  width: 10px;
  height: 10px;
  border-style: solid;
  border-color: #fff;
}
.btn-5:before {
  left: -4px;
  top: -4px;
  border-width: 1px 0 0 1px;
}
.btn-5:after {
  right: -4px;
  bottom: -4px;
  border-width: 0 1px 1px 0;
}
.btn-5:hover{
  border-color: #f13f84;
}
.btn-5:hover:before, 
.btn-5:hover:after{
  height: calc(100% + 7px);
  width: calc(100% + 7px);
  border-color: #f13f84;
  transform: rotateY(180deg);
}

//line样式6
.btn-6{
  overflow: hidden;
}
.btn-6:before, 
.btn-6:after, 
.btn-6 span:before, 
.btn-6 span:after{
  background: linear-gradient(to right, rgba(0,0,0,0), #f13f84);
  transition: all 2s;
}
.btn-6:before, 
.btn-6:after{
  width: 100%;
  height: 1px;
}
.btn-6:before {
  top: 0;
  left: -100%;
}
.btn-6:after {
  bottom: 0;
  right: -100%;
}
.btn-6 span:before, .btn-6 span:after{
  width: 1px;
  height: 100%;
}
.btn-6 span:before {
  bottom: -100%;
  left: 0;
}
.btn-6 span:after {
  top: -100%;
  right: 0;
}
.btn-6:hover:before{
  animation: topA 1s linear infinite;
  animation-delay: .5s;
}
@keyframes topA{
  100%{
    left: 100%;
  }
}
.btn-6:hover span:after{
  animation: rightA 1s linear infinite;
  animation-delay: 1s;
}
@keyframes rightA{
  100%{
    top: 100%;
  }
}
.btn-6:hover:after{
  animation: bottomA 1s linear infinite;
  animation-delay: 1.5s;
}
@keyframes bottomA{
  100%{
    right: 100%;
  }
}
.btn-6:hover span:before {
  animation: leftA 1s linear infinite;
  animation-delay: 2s;
}
@keyframes leftA{
  100%{
    bottom: 100%;
  }
}

//fill样式1
.btn-fill-1 {
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

.btn-fill-1::after {
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
.btn-fill-1::before {
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

.btn-fill-1:hover::after {
  left: -50%;
}

.btn-fill-1:hover::before {
  left: 50%;
}

.btn-fill-1:hover {
  color: #333;
}
</style>