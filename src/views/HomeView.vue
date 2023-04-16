<template>
  <h2>Main</h2>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <Loader class="offset-md-6" v-if="isLoading" />
    <ArticleCard v-else v-for="card in data" :article="card" :key="card.id"/>
  </div>

</template>
<script>
import {mapState} from "vuex";
import ArticleCard from "@/components/ArticleCard.vue";
import Loader from "@/components/ui-components/Loader.vue";

export default {
  components: {Loader, ArticleCard},

  computed: {
    ...mapState({
      data: state => state.articles.data,
      isLoading: state => state.articles.isLoading,
      error: state => state.articles.error
    })
  },
  mounted() {
    this.$store.dispatch("articles")
  },
}
</script>
