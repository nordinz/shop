<script setup>
import { useRandomStore } from "../stores/randomStore";

const randomStore = useRandomStore();
</script>

<template>
  <main>
    <section id="hero">
      <div class="text">
        <h1>{{ randomStore.productpage }}</h1>
        <p>{{ randomStore.producttext }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
#hero {
  background-image: url(../assets/img/products.jpg);
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: top 25% right 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.text {
  /* margin-left: 50px; */
  padding: 20px 200px;
  background-color: rgba(0, 0, 0, 0.71);
  border-radius: 0 25px 25px 0px;
  max-width: 100rem;
}

#hero h1 {
  font-size: 4em;
  color: rgb(0, 124, 207);
  padding-bottom: 15px;
}

#hero p {
  padding-bottom: 15px;
  color: rgb(255, 255, 255);
  font-weight: 900;
}
@media only screen and (max-width: 900px) {
  .text {
    padding: 20px 50px;
    border-radius: 25px;
    margin-top: 5vh;
  }
  #hero {
    display: flex;
    flex-direction: row;
  }
  #hero h1 {
    font-size: 2em;
    color: rgb(0, 124, 207);
    padding-bottom: 15px;
  }

  #hero h2 {
    font-size: 1.5em;
  }

  #hero h4 {
    font-size: 1.2em;
    padding-bottom: 15px;
    color: rgb(0, 0, 0);
    font-weight: 800;
  }
}
</style>
