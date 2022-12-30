<template>
  <div class="round-container">
      <h2>Want to contribute?</h2>
      <p>
        Creating detailed checklists/flows for several aircraft is a demanding task. If you feel like contributing to this project do not hesitate to join the Discord-channel.
      </p>
      <div class="flex-center">
        <a href="https://discord.gg/5KyYgrMZe6" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/discord_logo.svg" alt="Discord logo" id="discord-logo">
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "ContributeBox"
}
</script>

<style scoped>
  .round-container{
    max-width: 590px;
    padding: 20px 20px 30px 20px;
  }
  h2 {
    font-size: 20px;
    margin: 0 0 30px 0;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 44px;
  }
  p {
    text-align: left;
    margin: 0 0 10px 0;
  }
  a{
    margin: 20px 0 0 0;
  }
  #discord-logo{
    border-radius: 8px;
    background-color: #5865f2;
    height: 21px;
    width: 110px;
    padding: 10px 30px;
  }
</style>
