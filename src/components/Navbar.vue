<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <RouterLink to="/" class="d-flex align-items-center text-dark text-decoration-none">
        <img :src="logo" alt="logo" class="w-25">
      </RouterLink>
      <template v-if="isLoggedIn">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMfaVtR50PIe3narGDtBb9CHruowCn4RYjztsuoFU&s" alt="acc" class="m-3" style="width: 30px">
        <RouterLink :to="{name: 'home'}" class="me-3 py-2  text-primary text-uppercase  text-decoration-none" href="#">{{currentUser.username }}</RouterLink>
      </template>

      <template v-if="isAnonymous">
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <RouterLink :to="{name: 'login'}" class="me-3 py-2 text-dark text-decoration-none" href="#">Login</RouterLink>
          <RouterLink :to="{name: 'register'}" class="me-3 py-2 text-dark text-decoration-none" href="#">Register
          </RouterLink>
        </nav>
      </template>
    </div>
  </header>
</template>

<script>
import {logo} from "@/components/constants";
import {mapGetters, mapState} from "vuex";
import {getterTypes} from "@/modules/types";

export default {
  name: "Navbar",

  data() {
    return {
      logo: logo
    }
  },
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous
    }),
  }
}
</script>

<style scoped>
</style>