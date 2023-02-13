<script setup></script>

<template>
  <main>
    <section id="hero">
      <div class="text">
        <h1>Our history.</h1>
      </div>
    </section>
    <div class="container">
    <h1>It all started..</h1>
    <div class="text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga
        incidunt consectetur voluptates necessitatibus itaque nostrum, in
        tenetur a possimus autem. Corrupti culpa natus ipsum fugiat et
        praesentium eligendi perspiciatis, error enim! Nulla quibusdam quam
        quis, deleniti adipisci vitae officiis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ex ab cupiditate qui, beatae incidunt id
        expedita consequuntur sed odio voluptatum obcaecati praesentium!
        Voluptates rerum eius repellendus error qui iste? Ea, architecto?
        Necessitatibus, qui? Nulla recusandae optio quos voluptatem! Aspernatur
        minus, odio ex inventore nulla ipsum? Officia, consequatur. Quia
        commodi, error, voluptatum mollitia id nesciunt quo unde nemo iste ea
        eaque. Numquam praesentium, quaerat, itaque perspiciatis velit totam
        odit dolorum voluptatem, magni fugiat debitis minima saepe dignissimos
        inventore neque soluta exercitationem perferendis! Provident, porro
        voluptates aperiam enim iusto blanditiis ab quia labore, tenetur,
        incidunt autem! Culpa quae quidem placeat eligendi a.
      </p>
    </div>
  </div>

  </main>
</template>

<style scoped>
#hero {
  background-image: url(../assets/img/history.jpg);
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


}
</style>
