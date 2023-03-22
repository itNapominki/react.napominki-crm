import CryptoJS from 'crypto-js'

export default function setHash(offer) {
  const array = offer.map(({ id, halls, menus }) => ({ id, halls, menus }))
  const encrypt = CryptoJS.AES.encrypt(
    JSON.stringify(array),
    process.env.REACT_APP_SECRET_KEY
  )

  return encrypt.toString()
}
