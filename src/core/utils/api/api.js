import React from 'react'
import axios from './axios'
import auth from './auth'
import files from './files'

import { MODELS } from 'core/constants'

class Api {
  constructor() {
    this.apiUrl = {
      user: MODELS.USER.API_URL,
      restaurant: MODELS.RESTAURANT.API_URL,
      object: MODELS.OBJECT.API_URL,
      address: 'addresses',
      menu: 'menus',
    }

    this.auth = auth
    this.files = files
  }

  #token = localStorage.getItem('token')

  async create({ model, data }) {
    const token = this.#token

    return await axios.post(this.apiUrl[model], data, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }

  async update({ model, id, data, params }) {
    const token = this.#token

    return await axios.put(this.apiUrl[model] + '/' + id, data, {
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }

  async getAll({ model, params = {} }) {
    const token = this.#token
    console.log(model)

    return await axios.get(this.apiUrl[model], {
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }

  async getOne({ model, id, params = {} }) {
    const token = this.#token

    return await axios.get(this.apiUrl[model] + '/' + id, {
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }

  async delete({ model, id, message = 'Подтвердите удаление' }) {
    const token = this.#token

    if (window.confirm(message)) {
      return await axios
        .delete(this.apiUrl[model] + '/' + id, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
        .catch(({ response }) => alert(response.data.message))
    }
  }
}

export default new Api()
