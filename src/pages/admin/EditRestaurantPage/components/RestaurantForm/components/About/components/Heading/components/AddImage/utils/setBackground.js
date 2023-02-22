export default function setBackground(background) {
  if (background === null || background.includes('blob')) {
    return background
  }

  return process.env.REACT_APP_SERVER_URL + background
}
