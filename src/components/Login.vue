<template>
  <div class="text-center">
    <main class="form-signin w-25 m-auto">
      <form>
        <img class="mb-4 w-50" :src="logo" alt="">
        <h1 class="h3 mb-3 fw-normal">Login</h1>
        <validation-error v-if="validationErrors" :validationErrors='validationErrors'/>
        <Input :type="'email'" :label="'Email address'" v-model="email_log"/>
        <Input :type="'password'" :label="'Password'" :class="'mt-3'" v-model="password_log"/>
        <Button :disabled="isLoading" @click="submitHandler">Login</Button>

        <span class="d-inline-block mt-3 text-left">If you haven't registered yet. <br>You can <RouterLink
            to="/register">register here</RouterLink>!</span>
      </form>
    </main>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {logo} from "@/components/constants";
import ValidationError from "@/components/ValidationError.vue";

export default {
  name: "Login",
  components: {ValidationError},
  data() {
    return {
      logo: logo,
      email_log: '',
      password_log: '',
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.auth.isLoading,
      validationErrors: state => state.auth.error
    })
  },

  methods: {

    submitHandler: function (e) {
      e.preventDefault()
      let data = {
        email: this.email_log,
        password: this.password_log
      }
      this.$store.dispatch('login', data)
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