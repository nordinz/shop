<script setup>
import Jew from "../components/JeweleryCard.vue"
</script>

<template>
    <div class="center">
        <h1>Jewelery Section</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa officiis vel natus doloremque, aliquid dignissimos expedita nihil incidunt ad dolor voluptatem maiores possimus cupiditate quaerat. Nemo velit soluta incidunt asperiores similique ab est, amet esse architecto ad eum officia.</p>
    
<Jew/>

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
.card-trans-enter-from{
    transform: translateY(0);
    opacity: 1;
}
.card-trans-enter-active{
    transition: all 4s ease;
}
</style>