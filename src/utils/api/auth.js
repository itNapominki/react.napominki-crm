import jwtDecode from 'jwt-decode'
import axios from './axios'

class Auth {
  async login({ email, password }) {
    return await axios
      .post('/auth/login', { email, password })
      .then(({ data }) => {
        localStorage.setItem('token', data.token)

        const user = jwtDecode(data.token)

        return user
      })
      .catch(({ response }) => alert(response.data.message))
  }

  async check() {
    const token = localStorage.getItem('token')

    return await axios
      .get('/auth/check', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.token)

        const user = jwtDecode(data.token)

        return user
      })
      .catch(({ response }) => alert(response.data.message))
  }
}

export default new Auth()
