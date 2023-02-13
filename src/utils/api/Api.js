import React from 'react'
import axios from './axios'
import auth from './auth'

class Api {
  constructor() {
    this.model = {
      user: 'users',
      restaurant: 'restaurants',
      object: 'objects',
      address: 'addresses',
    }

    this.auth = auth
  }

  #token = localStorage.getItem('token')

  async create({ model, data }) {
    return await axios.post(`/${model}/`, data)
  }

  async update({ model, id, data }) {
    const token = this.#token

    return await axios.put(`/${model}/` + id, data, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }

  getAll({ model, value = null, params = {} }) {
    const token = this.#token
    const [data, setData] = React.useState(value)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
      async function getData() {
        await axios
          .get(`/${model}/`, {
            ...params,
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(({ data }) => setData(data))
          .catch(({ response }) => setError(response.data))
      }

      getData()
    }, [])

    return { data, setData, error, setError }
  }

  getOne({ model, value = null, id }) {
    const [data, setData] = React.useState(value)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
      async function getData() {
        await axios
          .get(`/${model}/` + id)
          .then(({ data }) => setData(data))
          .catch(({ response }) => setError(response.data))
      }

      getData()
    }, [])

    return { data, setData, error, setError }
  }

  async delete({ model, id, onSuccess, message = 'Подтвердите удаление' }) {
    if (window.confirm(message)) {
      return await axios
        .delete(`/${model}/` + id)
        .then((res) => onSuccess(res))
        .catch(({ response }) => alert(response.data.message))
    }
  }
}

export default new Api()
