import React from 'react'
import axios from './axios'
import auth from './auth'
import files from './files'

class Api {
  constructor() {
    this.model = {
      user: 'users',
      restaurant: 'restaurants',
      object: 'objects',
      address: 'addresses',
      menu: 'menus',
    }

    this.auth = auth
    this.files = files
  }

  #token = localStorage.getItem('token')

  async create({ model, data }) {
    const token = this.#token

    return await axios.post(`/${model}/`, data, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }

  async update({ model, id, data, params }) {
    const token = this.#token

    return await axios.put(`/${model}/` + id, data, {
      params,
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
            params,
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
    const token = this.#token

    const [data, setData] = React.useState(value)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
      async function getData() {
        await axios
          .get(`/${model}/` + id, {
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

  async delete({ model, id, message = 'Подтвердите удаление' }) {
    const token = this.#token

    if (window.confirm(message)) {
      return await axios
        .delete(`/${model}/` + id, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .catch(({ response }) => alert(response.data.message))
    }
  }
}

export default new Api()
