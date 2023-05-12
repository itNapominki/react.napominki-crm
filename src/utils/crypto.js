import CryptoJS from 'crypto-js'

export const decrypt = (hash) => {
  const bytes = CryptoJS.AES.decrypt(hash, process.env.REACT_APP_SECRET_KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}

export const encrypt = (string) => {
  const encrypt = CryptoJS.AES.encrypt(string, process.env.REACT_APP_SECRET_KEY)
  return encrypt.toString()
}
