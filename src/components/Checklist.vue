<template>
  <div class="flex-center flex-vertical">
    <div class="round-container" v-for="list in checklist" :key="list">
      <h2>{{list.title}}</h2>
      <div class="checklist-item" v-for="item in list.items" :key="item">
        <ChecklistBoolItem v-if="item.type === 'bool'" :item="item" />
        <ChecklistConditionalItem v-else-if="item.type === 'conditional'" :item="item" />
      </div>
      <div class="checklist-complete">
        <h3>{{list.title}}</h3>
        <div class="checklist-complete-button" @click="this.scrollToNext">
          COMPLETE
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChecklistBoolItem from './ChecklistBoolItem.vue'
import ChecklistConditionalItem from "@/components/ChecklistConditionalItem.vue";

export default {
  name: "ChecklistView",
  props: {
    checklist: Object
  },
  components: {
    ChecklistBoolItem,
    ChecklistConditionalItem
  },
  methods: {
    scrollToNext(event) {
      let next = event.target.parentElement.parentElement.nextElementSibling;
      if (next) {
        next.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
h2{
  margin: 0 0 30px 0;
  font-size: 20px;
  line-height: 44px;
  font-weight: bold;
  text-transform: uppercase;
}
h3{
  margin: 0 0 0 0;
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
  text-transform: uppercase;
}
.round-container{
  max-width: 433px;
  width: 90%;
  padding: 20px;
}
.checklist-item{
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-color: hsla(0, 0%, 100%, 0.1);
}
.checklist-complete{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0 0;
}
.checklist-complete-button{
  padding: 9px 12px;
  background-color: #32e0c4;
  color: #24665b;
  border-radius: 8px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}
.checklist-complete-button:hover{
  background-color: #11ffd9;
}
</style>
