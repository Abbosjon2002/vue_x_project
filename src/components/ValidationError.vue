<template>
  <h2>ValidationError</h2>
  <ul class="list-group mb-2">
    <li class="list-group-item list-group-item-danger mt-2 " v-for="errorMessage in errorMessages" :key="errorMessage">{{ errorMessage }}</li>
  </ul>
</template>

<script>
export default {
  name: "ValidationError",
  props: {
    validationErrors: {
      type: Object,
      required: true,
    }
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map(name => {
        const msg = this.validationErrors[name].join(', ')
        return `${name} ${msg}`
      }
    )
    }
  }

}
</script>

<style scoped>

</style>