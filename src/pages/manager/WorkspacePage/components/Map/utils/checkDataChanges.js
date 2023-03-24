export default function checkDataChanges(node, attribute, callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type !== 'attributes') {
        return
      }

      return callback(mutation.target.dataset[attribute])
    }
  })

  observer.observe(node, { attributes: true })
}
