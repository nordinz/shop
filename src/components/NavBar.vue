<script setup></script>

<template>
  <section class="header">
    <p>Webshop!</p>
    <nav>
      <ul>
        <router-link v-slot="{ isActive }" to="/">
          <li :class="[isActive && 'active', 'link']">Home</li>
        </router-link>
        <router-link v-slot="{ isActive }" to="/products">
          <li :class="[isActive && 'active', 'link']">Products</li>
        </router-link>
        <router-link v-slot="{ isActive }" to="/about">
          <li :class="[isActive && 'active', 'link']">About</li>
        </router-link>
      </ul>
    </nav>
  </section>
  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  background-color: var(--blue);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
}

.header p {
  font-size: 2em;
  font-weight: 900;
  color: rgb(255, 255, 255);
}

nav,
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.link {
  font-size: large;
  font-weight: 700;
  color: #ffffff;
  transition: 0.3s;
}

.active {
  color: var(--blue);
  background-color: white;
  padding: 5px 12px 5px 12px;
  border-radius: 15px;
}
nav a li:hover {
  color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.386);
  padding: 5px 12px 5px 12px;
  border-radius: 15px;
}

@media only screen and (max-width: 900px) {
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}


</style>
