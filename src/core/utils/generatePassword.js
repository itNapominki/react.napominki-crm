export default function generatePassword() {
  const symbols = 'abcdefghijklmnopqrstuvwxyz1234567890'
  const length = 20

  let password = ''

  for (let i = 0; i < length; i++) {
    password += symbols[Math.floor(Math.random() * symbols.length)]
  }

  return password
}
