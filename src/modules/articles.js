import ArticlesService from "@/services/articles";

const state = {
    data: null,
    isLoading: false,
    error: null
}

const mutations = {
    startGetArticles(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    successGetArticles(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    failureGetArticles(state) {
        state.isLoading = false
    }
}
const actions = {
    articles(context) {
        return new Promise((resolve, reject) => {
            context.commit('startGetArticles')
            ArticlesService.articles()
                .then(response =>{
                    context.commit('successGetArticles', response.data.articles)
                    resolve(response.data.articles)
                })
                .catch(()=>{context.commit('failureGetArticles')})
        })
    }
}

export default {
    state, mutations, actions
}