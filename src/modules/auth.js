import AuthService from "@/services/auth";
import {setItem} from "@/helper/persistanseStorage";

const state = {
    isLoading: false,
    user: null,
    error: null,
    isLoggedIn: null
}

const mutations = {
    startRegister(state) {
        state.isLoading = true
        state.user = null
        state.error = null
        state.isLoggedIn = null
    },
    successRegister(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    failureRegister(state, payload) {
        state.isLoading = false
        state.isLoggedIn = false
        state.error = payload.errors
    },
    startLogin(state){
        state.isLoading = true
        state.user = null
        state.error = null
        state.isLoggedIn = null

    },
    successLogin(state, payload){
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true

    },
    failureLogin(state, payload){
        state.isLoading = false
        state.error = payload.errors
        state.isLoggedIn = false

    },

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
    },

    login(context, user) {
        return new Promise((resolve, reject)=>{
            context.commit('startLogin')
            AuthService.login(user)
                .then(response =>{
                    context.commit('successLogin', response.data.user)
                    setItem('token', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(error => {
                    context.commit('failureLogin', error.response.data)
                    reject(error.response.data)
                })
        });
    }
}
export default {
    state, mutations, actions
}