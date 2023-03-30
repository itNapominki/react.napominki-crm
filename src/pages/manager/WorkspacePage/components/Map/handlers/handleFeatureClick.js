export default function handleFeatureClick(e, objectManager, setModalFor) {
  let id = e.get('objectId')

  const feature = objectManager.objects.getById(id)

  if (feature.properties.type === 'RESTAURANT') {
    setModalFor(id)
  }
}
