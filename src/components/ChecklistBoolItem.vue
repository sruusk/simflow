<template>
  <div class="main" @click="toggleCheck">
    <h3>{{ item.title }}</h3>
    <div class="check">
      <p>{{ item.value }}</p>
      <div :class="{ 'checked': checked }" class="check-icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChecklistBoolItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    isTicked: Boolean
  },
  emits: ['update:isTicked'],
  data() {
    return {
      checked: false
    };
  },
  watch: {
    checked: function() {
      this.$emit('update:isTicked', this.checked);
    }
  },
  methods: {
    toggleCheck() {
      this.checked = !this.checked;
    }
  }
};
</script>

<style scoped>
h3 {
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  margin: 0;
}

p {
  color: #717985;
  margin: 0;
}

.main {
  width: 100%;
  height: 25px;
  margin: 0;
  padding: 5px 0 5px 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}

.check {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
}

.check-icon {
  margin: 0 0 0 5px;
  width: 19px;
  height: 19px;
  border-color: #3f5960;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;
}

.check :deep(.checked) {
  border-color: #0d7377;
  background-color: #32e0c4;
  background-image: url("@/assets/img/checkmark.webp");
  background-size: 10px 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
}
</style>
