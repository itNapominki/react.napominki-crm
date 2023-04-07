export default function handleAdd(setContacts) {
  setContacts((prev) => [...prev, { fullname: '', position: '', phone: '' }])
}
