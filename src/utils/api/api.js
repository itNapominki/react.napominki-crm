import React from 'react'
import axios from './axios'
import auth from './auth'
import files from './files'

import { MODELS } from 'constants'

class Api {
  constructor() {
    this.apiUrl = {
      user: MODELS.USER.API_URL,
      restaurant: MODELS.RESTAURANT.API_URL,
      object: MODELS.OBJECT.API_URL,
      location: MODELS.LOCATION.API_URL,
      menu: MODELS.MENU.API_URL,
      settings: '/settings',
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

    return await axios.put(this.apiUrl[model] + '/' + (id ? id : ''), data, {
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }

  async publicate({ model, id, data }) {
    const token = this.#token

    return await axios.put(this.apiUrl[model] + '/' + id + '/publicate', data, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  }

  async getAll({ model, params = {} }) {
    const token = this.#token

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

  async delete({ model, id }) {
    const token = this.#token

    return await axios
      .delete(this.apiUrl[model] + '/' + id, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .catch(({ response }) => alert(response.data.message))
  }
}

export default new Api()
