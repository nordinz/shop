<script setup></script>

<template>
  <main>
    <section id="hero">
      <div class="text">
        <h4>Lorem ipsum dolor.</h4>
        <h2>Lorem, ipsum dolor.</h2>
        <h1>Lorem, ipsum.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          eum!
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
#hero {
  background-image: url(../assets/img/womanbg.jpg);
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
  padding: 20px 150px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 25px 25px 0px;
  max-width: 100rem;
}

#hero h1 {
  font-size: 4em;
  color: rgb(0, 124, 207);
  padding-bottom: 15px;
}

#hero h2 {
  font-size: 3em;
}

#hero h4 {
  font-size: 1.3em;
  padding-bottom: 15px;
  color: rgb(0, 0, 0);
  font-weight: 800;
}

#hero p {
  padding-bottom: 15px;
  color: rgb(24, 24, 24);
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
