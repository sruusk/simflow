<template>
  <main class="flex-center flex-vertical">
    <div class="flex-center flex-wrap">
      <AircraftItem
        v-for="aircraftItem in aircraftStore.aircraft" :key="aircraftItem" :aircraft="aircraftItem"
        @click="$router.push({ name: 'aircraft', params: { aircraft: aircraftItem.type } })"
      />
    </div>
    <ContributeBox />
  </main>
</template>

<script>

import { defineComponent } from "vue";
import AircraftItem from "@/components/AircraftItem.vue";
import ContributeBox from "@/components/ContributeBox.vue";
import { useAircraftStore } from "@/stores";

export default defineComponent({
    name: "HomeView",
    components: {
        ContributeBox,
        AircraftItem
    },
    setup() {
        const aircraftStore = useAircraftStore();
        return { aircraftStore };
    },
});
</script>

<style scoped>
main {
    width: 100%;
}
</style>
