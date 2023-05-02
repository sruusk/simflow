<template>
  <div class="main">
    <h3>{{ item.title }}</h3>
    <div v-for="row in item.value" :key="row" class="row">
      <div class="left">
        <img :src="`${ import.meta.env.BASE_URL }${ row.img }`" alt="">
        <p>{{ row.title }}</p>
      </div>
      <div class="right">
        <p>{{ row.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChecklistReminderItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  margin: 5px 0 0 0;
  padding: 0 0 5px 0;
  text-transform: uppercase;
}

h3 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  margin: 0;
  color: #32e0c4;
}

p {
  color: #717985;
  margin: 0;
}

.row {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.left img {
  width: 30px;
  height: 30px;
  margin: 0 20px 0 0;
  filter: brightness(1.8);
}

.left, .right {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0;
}
</style>
