<script>
import { ref } from 'vue';
import {useMailStore} from '../stores/email'
export default{

setup(){
const emailRef = ref('')
const email= useMailStore()
  return{ emailRef, email}
}
}
</script>


<template>

<div class="container-sign">
  <div class="text-sign"><p>Signup for our newsletter!</p>
  </div>
  <div class="input">
    <input type="text" v-model="emailRef" placeholder="mailadress">
    <p>{{ email }}</p>
  </div>
  <button class="btn-signup" @click="email.submitEmail(emailRef)">Signup!</button>
</div>


</template>
<style scoped>
body {
  padding: 2rem 0;
}
</style>