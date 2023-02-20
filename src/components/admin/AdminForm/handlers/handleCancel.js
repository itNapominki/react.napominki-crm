export default function handleCancel({
  message = 'Отменить редактирование?',
  callback,
}) {
  return function () {
    if (window.confirm(message)) {
      if (callback) {
        callback()
      }
    }
  }
}
