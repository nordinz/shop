<script setup>
import card from "../components/ProductsCard.vue"
import { useRandomStore } from "../stores/randomStore";


    const randomStore = useRandomStore()

</script>

<template>
    <div class="center">
        <h1>{{randomStore.productpage}}</h1>
        <p>{{ randomStore.producttext }}</p>
    
<card/>
</div>
</template>

<style scoped>
.center{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  
}
</style>