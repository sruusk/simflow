<template>
  <header @click="this.selectedChecklist = null">
    <img :class="{ logoSmall: this.selectedChecklist, 'logo': !this.selectedChecklist }" alt="Simflow logo"
         src="@/assets/img/logo.webp"/>
    <Transition>
      <div v-if="this.selectedChecklist" class="button return-button">Return</div>
    </Transition>
  </header>

  <main v-if="!selectedChecklist" class="flex-center flex-vertical">
    <div class="flex-center flex-wrap">
      <AircraftItem v-for="aircraftItem in aircraft" :key="aircraftItem" :aircraft="aircraftItem"
                    @click="this.showChecklist(aircraftItem)"/>
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

body {
  margin: unset;
}

#app {
  background-color: #040e29;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: white;
}

.button {
  color: #24665b;
  background-color: #32e0c4;
  background-image: linear-gradient(150deg, #32e0c4, #38d2ea);
  border-radius: 8px;
  cursor: pointer;
}

.button:hover {
  background-color: #11ffd9;
  background-image: linear-gradient(150deg, #38d2ea, #32e0c4);
  filter: brightness(1.2);
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
  background-color: #28324d;
  padding: 20px;
  margin: 20px;
}
</style>

<style scoped>
:deep(.ps__rail-y) {
  background-color: #28324d;
  border-radius: 10px;
}

main {
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
  transition: all 0.5s ease, transform 0.5s;
}

.logoSmall{
  width: 200px;
  height: 41px;
  transition: transform 0.5s, width 0.5s, height 0.5s ease-in-out;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100px) scale(0);
}

.return-button{
  margin-left: 100px;
  padding: 9px 40px;
  font-size: 16px;
  font-weight: 700;
}
</style>
