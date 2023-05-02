<template>
  <main>
    <Checklist :checklist="aircraftStore.currentChecklist" />
    <div
      class="flex-center"
      style="padding: 20px 0 40px 0"
      @click="$router.push({ name: 'home' })"
    >
      <div class="button return-button">Return</div>
    </div>
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
.return-button{
    padding: 9px 40px;
    font-size: 16px;
    font-weight: 700;
}
</style>
