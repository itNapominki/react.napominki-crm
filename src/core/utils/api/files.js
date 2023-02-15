import axios from './axios'

class Files {
  async upload({ folder, formData }) {
    return await axios.post('/files/' + folder, formData)
  }
}

export default new Files()
