
<script setup>
import { VueElement } from 'vue';




</script>

<template>
  <div class="center">
<div class="first">
  <h2>Lorem, ipsum.</h2>
 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptas magnam veniam cum vitae doloribus quae unde nostrum recusandae. Harum vero amet eum sit at, vel rem eos facilis eaque!</p> 
 <RouterLink to="/jewelery"><button>Check out our jewlerey here</button></RouterLink>
</div>
<div class="second">
  <img class="img-fluid" src="../assets/Img/jewlery.jpg" alt="ring in box">
</div>
<div class="third"><h2>Lorem, ipsum.</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum, quas voluptatibus tempora qui quisquam maxime aspernatur deserunt obcaecati repudiandae omnis ex. A tempore dolores aliquid distinctio, temporibus ut cupiditate quos, sunt, repellendus ea ab error vitae repudiandae enim! Ex saepe non quidem? Dolorum delectus velit non similique quidem mollitia, alias quos minus, suscipit tempora eius est impedit error sed modi aliquam odio rerum asperiores nam? Perferendis blanditiis quis nihil laudantium minima iste id aspernatur distinctio, eaque velit, ipsum, molestias sit cumque nesciunt sapiente quae? Atque deserunt eligendi saepe hic suscipit nobis harum soluta, corporis dolor expedita temporibus explicabo sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, repellendus quibusdam rerum odit aspernatur id exercitationem numquam aliquam porro, qui similique dolorum recusandae sapiente in quo? Suscipit unde id perspiciatis!</p>
</div>
<div class="forth"><img class="img-fluid mx-auto" src="../assets/Img/electronics.jpg" alt=""></div>
</div>
</template>

<style>
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
.first{
 
  height: 100%;
  padding: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  
}
.second{
 
  max-width: 1000px;
 
}
.third{
  
  padding: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  
  
 
}
.forth{
 
  max-width: 1000px;
  
}


</style>



