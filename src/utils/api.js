import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const api = {
  users: {
    create: (data) => axios.post('/users', data),
    getAll: () => fetch.get('/users'),
    update: (id, data) => axios.put('/users/' + id, data),
    delete: (id) => axios.delete('/users/' + id),
  },
  objects: {
    create: (data) => axios.post('/objects', data),
    getAll: () => fetch.get('/objects'),
    getById: (id) => fetch.get('/objects/', id),
    update: (id, data) => axios.put('/objects/' + id, data),
    delete: (id) => axios.delete('/objects/' + id),

    metro: {
      getAll: () => fetch.get('/objects?type=metro'),
    },
  },
  restaurants: {
    create: (data) => axios.post('/restaurants', data),
    getAll: () => fetch.get('/restaurants'),
    getById: (id) => fetch.get('/restaurants?_id=' + id),
  },
}

export default api
