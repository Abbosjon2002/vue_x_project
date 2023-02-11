
<template>
  <div class="container mt-5">
    <Navbar/>
  </div>

  <div class="container">
    <RouterView/>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {Navbar}
})
</script>
<style scoped>

</style>
