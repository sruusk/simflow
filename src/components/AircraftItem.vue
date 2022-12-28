<template>
  <div class="round-container main">
    <div class="image-container">
      <img class="aircraft-image" :src="aircraft.image" alt="aircraft image">
      <h1 class="aircraft-name">{{aircraft.manufacturer}} {{aircraft.type}}</h1>
      <div class="tags">
        <div class="tag round-container" v-for="tag in aircraft.tags" :key="tag.text" :style="{'background-color': tag.color}">
          {{tag.text}}
        </div>
      </div>
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
  margin: -60px 0 0 0;
  text-align: center;
  font-size: 32px;
  line-height: 44px;
}
.main {
  width: 300px;
  height: 420px;
  padding: 0;
}
.image-container{
  width: 300px;
  height: 233px;

}
.aircraft-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: -200px 0 0 20px;
  padding: 0 0 0 0;
}
.tag{
  margin: 0 5px;
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
}
.start-button:hover{
  cursor: pointer;
  background-color: #11ffd9;
}
</style>
