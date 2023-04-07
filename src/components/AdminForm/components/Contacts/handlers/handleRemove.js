export default function handleRemove(setContacts, i) {
  setContacts((prev) => prev.filter((_, index) => index != i))
}
