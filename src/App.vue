<template>
  <header @click="$router.push({ name: 'home' })">
    <Transition name="spacer">
      <div v-if="showReturn" />
    </Transition>
    <img
      :class="{ logoSmall: showReturn, 'logo': !showReturn }" alt="Simflow logo"
      src="@/assets/img/logo.webp"
    >
    <Transition name="return">
      <div v-if="showReturn" class="button return-button">Return</div>
    </Transition>
  </header>
  <RouterView />
</template>

<script>

export default {
  name: "App",
  computed: {
    showReturn() {
      return !!this.$route.params.aircraft;
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
  height: unset;
  min-height: 100vh;
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
  transition: transform 0.5s, width 0.5s, height 0.3s ease-in-out;
}

.spacer-enter-active,
.spacer-leave-active {
  transition: width 0.5s ease;
}

.spacer-enter-from,
.spacer-leave-to {
  width: 238px; /* This is the width of the return button plus the margin */
}

.spacer-enter-to,
.spacer-leave-from {
  width: 0;
}

.return-enter-active,
.return-leave-active {
  transition: transform 0.5s ease;
}

.return-enter-from,
.return-leave-to {
  transform: scale(0);
}

.return-button{
  margin-left: 100px;
  padding: 9px 40px;
  font-size: 16px;
  font-weight: 700;
}
</style>
