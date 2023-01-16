import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const api = {
  users: {
    create: (data) => axios.post('/users', data),
    getAll: () => fetch.get('/users'),
    update: (id, data) => axios.put('/users/' + id, data),
    remove: (id) => axios.delete('/users/' + id),
  },
  objects: {
    getAll: () => fetch.get('/objects'),

    metro: {
      getAll: () => fetch.get('/objects?type=metro'),
    },
  },
  restaurants: {
    getAll: () => fetch.get('/restaurants'),
    getById: (id) => fetch.get('/restaurants?_id=' + id),
  },
}

export default api
