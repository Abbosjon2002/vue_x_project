<template>
  <div class="col">
    <div class="card shadow-sm">
<!--      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"-->
<!--           role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>-->
<!--        Placeholder</title>-->
<!--        <rect width="100%" height="100%" fill="#55595c"></rect>-->
<!--        <text x="10%" y="50%" fill="#eceeef" dy=".3em">{{ article.title }}</text>-->
<!--      </svg>-->
      <div class="card-body">
        <h2 class="card-title">{{article.title}}</h2>
        <p class="card-text">{{article.description}}</p>
      </div>
        <div class="d-flex card-footer justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Read more...</button>
<!--            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
          </div>
          <small class="text-body-secondary">{{new Date(article.createdAt).toLocaleDateString('us')}}</small>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleCard",
  props: {
    article:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>