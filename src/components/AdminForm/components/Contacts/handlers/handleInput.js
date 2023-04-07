export default function handleInput(setContacts, key, value, i) {
  setContacts((prev) =>
    prev.map((contact, index) => {
      if (index === i) {
        contact[key] = value
      }

      return contact
    })
  )
}
