<template>
  <main>
    <Checklist :checklist="aircraftStore.currentChecklist" />
  </main>
</template>

<script>

import { defineComponent } from "vue";
import Checklist from "@/components/Checklist.vue";
import { useAircraftStore } from "@/stores";

export default defineComponent({
    name: "ChecklistView",
    components: { Checklist },
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
