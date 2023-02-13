<script setup>
  import { Icon } from '@iconify/vue'
  const props = defineProps({
    info: {
      required: true,
      type: Object
    }
  })
</script>

<template>
  <div class="box">
    <h2>{{ props.info.title }}</h2>
    <p>{{ props.info.info }}</p>

    <Icon :icon="info.icon" width="200" />
  </div>
</template>

<style scoped>
  .box {
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px rgb(0, 0, 0);
    padding-top: 30px;
    margin: 20px;
    max-width: 400px;
    text-align: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }

  .box h2 {
    padding: 10px;
  }

  .box p {
    padding: 10px;
  }

  .box img {
    padding: 10px;
  }

  @media (max-width: 950px) and (min-width: 450px) {
    .box {
      text-align: center;
      margin-top: 2vh;
      margin-bottom: 2vh;
    }
  }
</style>
