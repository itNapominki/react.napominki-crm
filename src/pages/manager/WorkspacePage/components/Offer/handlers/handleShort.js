export default async function handleShort(url, setUrl) {
  const res = await fetch(process.env.REACT_APP_SERVER_URL + '/short-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      url,
    }),
  })

  const { shorturl } = await res.json()
  setUrl(shorturl)
}
