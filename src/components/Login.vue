<template>
  <div class="text-center">
    <main class="form-signin w-25 m-auto">
      <form>
        <img class="mb-4 w-50" :src="logo" alt="">
        <h1 class="h3 mb-3 fw-normal">Login</h1>
        <Input :type="'email'" :label="'Email address'"/>
        <Input :type="'password'" :label="'Password'" :class="'mt-3'"/>
        <Button>Login</Button>

        <span class="d-inline-block mt-3 text-left">If you haven't registered yet. <br>You can <RouterLink
            to="/register">register here</RouterLink>!</span>
      </form>
    </main>
  </div>
</template>

<script>
import {logo} from "@/components/constants";

export default {
  name: "Login",
  data() {
    return {
      logo: logo,
    }
  }
}
</script>

<style scoped>

</style>