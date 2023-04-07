<template>
  <div class="text-center">
    <main class="form-signin w-25 m-auto">
      <form>
        <img class="mb-4 w-50" :src="logo" alt="">
        <h1 class="h3 mb-3 fw-normal">Register</h1>
        <Input :type="'text'" class="input" :label="'Fullname'" v-model="username_auth" />
        <Input :type="'email'" :label="'Email'" :class="'mt-3'" v-model="email_auth"/>
        <Input :type="'password'" :label="'Password'" :class="'mt-3'" v-model="password_auth"/>
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
      username_auth: '',
      email_auth: '',
      password_auth: '',
    }
  },

  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    }
  },
  methods: {

    submitHandler: function (e) {
      e.preventDefault()
      let data = {
        username: this.username_auth,
        email: this.email_auth,
        password: this.password_auth
      }
      this.$store.dispatch('register', data)
          .then(user => {
            console.log("User", user)
            this.$router.push({name: 'home'})
          })
          .catch(err => {
            console.log("Error", err)
          })
    }
  }
}
</script>

<style scoped>

</style>