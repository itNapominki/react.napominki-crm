export default function handleCopy(e, url, setCopied) {
  e.preventDefault()

  const el = document.createElement('input')
  el.value = url
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  setCopied(true)
}
