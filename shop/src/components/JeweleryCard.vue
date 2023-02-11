<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const items = ref([])

/* GET */
const getItems = () => {
    return axios
        .get("https://api.escuelajs.co/api/v1/products")
        .then((res) => items.value = res.data)
        .catch((error) => console.log(error))
}
onMounted(() => {
    getItems()
})

console.log(items)




</script>

<template>

    <div class="box">

        <div v-for="item in items" class="card mb-4" style="max-width: 400px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="item.images" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.description }}</p>
                        <div class="card-footer">

                            <h2>Price: {{ item.price }}$</h2>
                            <button>Add to cart</button>
                            <button>Read more</button>

                        </div>

                    </div>

                </div>

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
    display: flex;
    background: transparent;
    border-top: 0px;
    flex-direction: column;
    
}
</style>