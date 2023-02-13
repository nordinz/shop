<script setup>
import card from "./CardComp.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
const items = ref([]);

/* GET */
const getItems = () => {
  return axios
    .get("cardinfo.json")
    .then((res) => (items.value = res.data))
    .catch((error) => console.log(error));
};
onMounted(() => {
  getItems();
});
</script>

<template>
  <div class="container">
    <card v-for="item in items" :key="item.id" :info="item" />
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
