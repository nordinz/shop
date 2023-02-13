<script>
import { ref } from "vue";
import { useMailStore } from "../stores/email";
export default {
  setup() {
    const emailRef = ref("");
    const email = useMailStore();
    return { emailRef, email };
  },
};
</script>

<template>
  <div class="container-sign">
    <div class="text-sign">
      <p>Signup for our newsletter! {{ email.email }}</p>
    </div>
    <div class="input">
      <input type="text" v-model="emailRef" placeholder="mailadress" />
    </div>
    <button class="btn-signup" @click="email.submitEmail(emailRef)">
      Signup!
    </button>
    <p>Look down</p>
    <p class="red">{{ email.email }}</p>
    <p>v-model is alive!</p>
  </div>
</template>
<style scoped>
body {
  padding: 2rem 0;
}
.text-sign p {
  color: white;
}
.container-sign {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-around;
}
.container-sign p {
  color: white;
}
#app > div.box > div > div.newsletter > div > p > p {
  color: red;
}
</style>
