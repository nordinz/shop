<script setup>
// import axios from 'axios'
import { ref, onMounted } from "vue";
import axios from "axios";
import mid from "../components/ProductIntro.vue";

const items = ref([]);

/* GET */
const getItems = () => {
  return axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((res) => (items.value = res.data))
    .catch((error) => console.log(error));
};
onMounted(() => {
  getItems();
});
</script>

<template>
  <mid />
  <div class="main">
    <div v-for="item in items" :key="item.id" class="box">
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
      <img :src="item.images" class="img" />
      <h2 v-if="item.price < 200" class="red">
        Special Price: {{ item.price }}$
      </h2>
      <h2 v-else>Price: {{ item.price }}$</h2>
      <button>Add to cart</button>
      <button>Read more</button>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px rgb(0, 0, 0);
  padding-top: 30px;
  margin: 20px;
  max-width: 400px;
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.red {
  color: red;
}

.img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
