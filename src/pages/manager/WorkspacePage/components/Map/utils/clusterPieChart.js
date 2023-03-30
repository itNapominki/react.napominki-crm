export default function clusterPieChart(objectManager) {
  objectManager.clusters.events.add('add', (e) => {
    const id = e.get('objectId')
    const cluster = objectManager.clusters.getById(id)
    const features = cluster.properties.geoObjects

    const data = [
      { weight: 0, color: '#26B91C' },
      { weight: 0, color: '#384588' },
      { weight: 0, color: '#E8EC2F' },
      { weight: 0, color: '#DF9423' },
      { weight: 0, color: '#C82929' },
      { weight: 0, color: '#4D516C' },
    ]

    objectManager.clusters.setClusterOptions(id, {
      clusterIconLayout: 'default#pieChart',
    })

    features.forEach((feature) => {
      const priority = feature.properties.priority
        ? feature.properties.priority - 1
        : 5

      data[priority].weight += 1
    })

    cluster.properties.data = data
  })
}
