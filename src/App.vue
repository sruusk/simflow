<template>
  <header @click="this.selectedChecklist = null">
    <img alt="Simflow logo" :class="{ logoSmall: this.selectedChecklist, 'logo': !this.selectedChecklist }" src="@/assets/img/logo.webp"/>
    <div class="return-button" v-if="this.selectedChecklist">Return</div>
  </header>

  <main class="flex-center flex-vertical" v-if="!selectedChecklist">
    <div class="flex-center flex-wrap">
      <AircraftItem v-for="aircraftItem in aircraft" :key="aircraftItem" :aircraft="aircraftItem" @click="this.showChecklist(aircraftItem)"/>
    </div>
    <ContributeBox/>
  </main>

  <main v-else>
    <Checklist :checklist="selectedChecklist"/>
  </main>
</template>

<script>
import AircraftItem from "@/components/AircraftItem.vue";
import ContributeBox from "@/components/ContributeBox.vue";
import Checklist from "@/components/Checklist.vue";
import aircraftList from "@/assets/aircraft.json";

export default {
  name: "App",
  components: {
    AircraftItem,
    ContributeBox,
    Checklist,
  },
  data() {
    return {
      aircraft: aircraftList,
      selectedChecklist: null,
    }
  },
  methods: {
    showChecklist(aircraft) {
      fetch(aircraft.checklist)
        .then(response => response.json())
        .then(data => {
          this.selectedChecklist = data;
        });
    }
  }
};
</script>

<style>
  /*noinspection CssUnknownTarget*/
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body{
    background-color: #232831;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: white;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-vertical {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .round-container {
    border-radius: 20px;
    background-color: #393e46;
    padding: 20px;
    margin: 20px;
  }
</style>

<style scoped>
  main{
    width: 100%;
  }

  header {
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    height: 88px;
    width: 427px;
  }

  .logoSmall{
    width: 200px;
    height: 41px;
  }

  .return-button{
    margin-left: 100px;
    font-size: 16px;
    font-weight: 700;
    color: #24665b;
    background-color: #32e0c4;
    border-radius: 8px;
    padding: 9px 40px;
    cursor: pointer;
  }
</style>
