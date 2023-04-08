import AuthService from "@/services/auth";
import {setItem} from "@/helper/persistanseStorage";

const state = {
    isLoading: false,
    user: null,
    error: null
}

const mutations = {
    startRegister(state) {
        state.isLoading = true
        state.user = null
        state.error = null
    },
    successRegister(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    failureRegister(state, payload) {
        state.isLoading = false
        state.error = payload.errors
    }
}

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('startRegister')
            AuthService.register(user)
                .then(response => {
                    context.commit('successRegister', response.data.user)
                    setItem('token', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(error => {
                    context.commit('failureRegister', error.response.data)
                    reject(error.response.data)
                })

        })
    }
}
export default {
    state, mutations, actions
}