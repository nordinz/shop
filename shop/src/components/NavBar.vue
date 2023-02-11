<script>
import { RouterLink } from "vue-router";

</script>


<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid ">
      <a class="navbar-logo d-lg-none" href="">
        <img src="../assets/Img/logo.png" class="navbar-logo">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li><a class="navbar-logo d-none d-lg-block " href="">
              <img src="../assets/Img/logo.png" class="navbar-logo">
            </a></li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Partners</RouterLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <RouterView />

</template>
<style scoped>
.navbar-logo {
  width: 150px;
}

.navbar .navbar-nav .nav-link {
  font-size: 1.1em;
  padding: 0 1em;
  font-weight: 500;
  text-decoration: none;
  color: black;
}

.navbar-nav {
  align-items: center;
}

.navbar-logo {
  width: 300px;
}
</style>
