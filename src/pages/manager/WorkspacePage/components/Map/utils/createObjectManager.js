export default function createObjectManager(ymaps) {
  return new ymaps.LoadingObjectManager(
    process.env.REACT_APP_SERVER_URL + '/api/map?bbox=%b',
    {
      paddingTemplate: 'myCallback_%b',
      splitRequests: false,
      // clusterize: true,
    }
  )
}
