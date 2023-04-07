import axios from "@/services/axios";

const AuthService = {
    register(user) {
        return axios.post('/users', {user})
    }
}

export default AuthService