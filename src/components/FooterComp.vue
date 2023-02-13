<script setup>
import SignUp from "./SignUp.vue";
</script>
<template>
  <div class="box">
    <div class="container">
      <div class="logo">
        <h1>WEBSHOP</h1>
        <p>© Copyright all day baby!</p>
      </div>
      <div class="company">
        <div class="company-t">
          <h2>The Company</h2>
          <p>Lorem, ipsum.</p>
          <p>Lorem.</p>
          <p>Lorem.</p>
        </div>
        <div class="company-b">
          <h2>Lorem.</h2>
          <p>Lorem.</p>
          <p>Lorem.</p>
        </div>
      </div>
      <div class="newsletter">
        <h2>NEWSLETTER</h2>
        <SignUp />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  background-image: url(../assets/img/wave.png);
  background-color: transparent;
  height: 60vh;
  background-repeat: no-repeat;
  background-size: cover;

}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  flex-direction: row;
}

.logo h1 {
  font-size: 4em;
  font-weight: 900;
  color: rgb(255, 255, 255);
}
.newsletter h2 {
  font-size: 2.2em;
  font-weight: 900;
  color: rgb(255, 255, 255);
}
.company {
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
}
.company-t p {
  font-size: 1.5em;
  font-weight: 900;
}
.company-b {
  font-size: 1.5em;
  font-weight: 900;
}
.company-b h2 {
  font-size: 2em;
  font-weight: 900;
}
.company-t h2 {
  font-size: 2em;
  font-weight: 900;
}
@media (max-width: 950px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    gap: 100px;
  }
  .box {
    width: 100%;
    background-image: url(../assets/img/wave.png);
    background-color: transparent;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

</style>
