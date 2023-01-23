<template>
  <div class="round-container main">
    <div class="image-container" :style="`background-image: url(${aircraft.image})`">
      <div class="tags">
        <div class="tag round-container" v-for="tag in aircraft.tags" :key="tag.text" :style="{'background-color': tag.color}">
          {{tag.text}}
        </div>
      </div>
      <h1 class="aircraft-name">{{aircraft.manufacturer}} {{aircraft.type}}</h1>
    </div>
    <p class="aircraft-description">{{aircraft.description}}</p>
    <div class="flex-center">
      <div class="start-button">Start checklist</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AircraftItem",
  props: {
    aircraft: Object
  },
  data() {
    return {
      checklist: {},
    };
  },
}
</script>

<style scoped>
h1{
  text-transform: uppercase;
  width: 100%;
  margin: -60px 0 10px 0;
  text-align: center;
  font-size: 32px;
  line-height: 44px;
  position: relative;
}
.main {
  width: 300px;
  height: 420px;
  padding: 0;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main:hover {
  transform: translate3d(0px, -13px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)
}
.image-container{
  width: 300px;
  height: 233px;
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px 0 0 20px;
  padding: 0 0 0 0;
  position: relative;
}
.tag{
  margin: 0 5px 10px 5px;
  padding: 5px 25px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
}
p{
  margin: 30px 20px;
}
.start-button{
  background-color: #5cdec4;
  width: 180px;
  font-weight: 700;
  line-height: 38px;
  border-radius: 8px;
  text-align: center;
  color: #24665b;
  margin-bottom: 20px;
}
.start-button:hover{
  cursor: pointer;
  background-color: #11ffd9;
}
</style>
