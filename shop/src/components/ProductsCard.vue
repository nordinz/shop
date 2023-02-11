<script>
// import axios from 'axios'
import { ref, onMounted } from 'vue'
import {useProductStore} from '../stores/products'


// const items = ref([])
export default{

setup(){
const emailRef = ref('')
const {fetchProducts, products}= useProductStore()
  return{ fetchProducts, items: products }
}
}

/* GET */
// const getItems = () => {
//     return axios
//         .get("https://api.escuelajs.co/api/v1/products")
//         .then((res) => items.value = res.data)
//         .catch((error) => console.log(error))
// }
onMounted(() => {
    // getItems()
    fetchProducts()

})





</script>

<template>

    <div v-if="items" class="box">

     

        <div v-for="item in items" class="card mb-4" style="max-width: 400px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="item.images" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.description }}</p>
                        <div class="card-footer text-muted mx-auto">
                            
                            <h2 v-if="item.price < 200" class="red">Special Price: {{ item.price }}$</h2>
                            <h2 v-else>Price: {{ item.price }}$</h2>
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
.red{
    color: red;
}

.card-body {
    display: flex;
    flex-direction: column;
}

.card-footer {
    background: transparent;

}
</style>