<template>
  <div class="flex-center flex-vertical">
    <div
      v-for="list in checklist"
      :key="list"
      class="round-container"
    >
      <h2>{{ list.title }}</h2>
      <div
        v-for="item in list.items"
        :key="item"
        class="checklist-item"
      >
        <ChecklistBoolItem
          v-if="item.type === 'bool'"
          :item="item"
        />
        <ChecklistReminderItem
          v-else-if="item.type === 'reminder'"
          :item="item"
        />
      </div>
      <div class="checklist-complete">
        <h3>{{ list.title }}</h3>
        <div
          class="button checklist-complete-button"
          @click="scrollToNext"
        >
          COMPLETE
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChecklistBoolItem from './ChecklistBoolItem.vue';
import ChecklistReminderItem from "@/components/ChecklistReminderItem.vue";

export default {
  name: "ChecklistView",
  components: {
    ChecklistBoolItem,
    ChecklistReminderItem
  },
  props: {
    checklist: {
      type: Object,
      required: true
    }
  },
  methods: {
    scrollToNext(event) {
      const next = event.target.parentElement.parentElement.nextElementSibling;
      if(next) {
        next.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0 0 30px 0;
  font-size: 20px;
  line-height: 44px;
  font-weight: bold;
  text-transform: uppercase;
}

h3 {
  margin: 0 0 0 0;
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
  text-transform: uppercase;
}

.round-container {
  max-width: 433px;
  width: 85%;
  padding: 20px;
}

.checklist-item {
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-color: hsla(0, 0%, 100%, 0.1);
}

.checklist-complete {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0 0;
}

.checklist-complete-button {
  padding: 9px 12px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
