<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <RouterLink to="/" class="d-flex align-items-center text-dark text-decoration-none">
        <img :src="logo" alt="logo" class="w-25">
      </RouterLink>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <RouterLink :to="{name: 'login'}" class="me-3 py-2 text-dark text-decoration-none" href="#">Login</RouterLink>
        <RouterLink :to="{name: 'register'}" class="me-3 py-2 text-dark text-decoration-none" href="#">Register</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import {logo} from "@/components/constants";

export default {
  name: "Navbar",

  data() {
    return{
      logo: logo
    }
  }
}
</script>

<style scoped>
.logo{
  width: 150px;
}
</style>