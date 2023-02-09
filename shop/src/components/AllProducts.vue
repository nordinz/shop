<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const items = ref([])

/* GET */
const getItems = () => {
    return axios
        .get("https://fakestoreapi.com/products")
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
}
onMounted(() => {
    getItems()
})

console.log(items)




</script>

<template>

    <div class="box">

        <div v-for="item in items" class="card mx-auto bg-light" style="width: 18rem;">
            <img :src="item.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h1>{{ item.title }}</h1>
            </div>
            <div class="card-footer text-muted mx-auto">
                <h2>Price: {{ item.price }}$</h2>
                <button>Add to cart</button>
                <button>Read more</button>
            </div>
        </div>

    </div>


</template>

<style scoped>
.box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
    gap: 20px;


}

.card-body {
    display: flex;
    flex-direction: column;
}

.card-footer {
    background: transparent;
    border-top: 0px;
}
</style>