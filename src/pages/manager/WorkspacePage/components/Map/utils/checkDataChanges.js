export default function checkDataChanges(node, attribute, callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type !== 'attributes' ||
        mutation.attributeName !== attribute
      ) {
        return
      }

      return callback(mutation.target.getAttribute(attribute))
    }
  })

  observer.observe(node, { attributes: true })
}
