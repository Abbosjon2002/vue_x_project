<template>
  <div class="text-center">
    <main class="form-signin w-25 m-auto">
      <form>
        <img class="mb-4 w-50" :src="logo" alt="">
        <h1 class="h3 mb-3 fw-normal">Register</h1>
        <Input :type="'text'" :label="'Fullname'"/>
        <Input :type="'email'" :label="'Email'" :class="'mt-3'"/>
        <Input :type="'password'" :label="'Password'" :class="'mt-3'"/>

        <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>

        <span class="d-inline-block mt-3 text-left">If you registered, already. <br>You can <RouterLink to="/login">login here</RouterLink>!</span>

      </form>
    </main>
  </div>
</template>

<script>
import {logo} from "@/components/constants";

export default {
  name: "Register",
  data() {
    return {
      logo: logo,
    }
  },
  computed: {
    isLoading(){
      return this.$store.state.auth.isLoading
    }
  },
  methods: {
    submitHandler(e){
      e.preventDefault()
      this.$store.dispatch('register')
    }
  }
}
</script>

<style scoped>

</style>