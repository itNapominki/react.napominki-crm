import { ROUTES } from 'router/routes'
import { encrypt } from 'utils'

export default function getUrl(decrypted, id) {
  const { halls, menus } = decrypted.restaurants.find(
    (restaurant) => restaurant.id === id
  )
  const { managerId } = decrypted

  return [
    ROUTES.RESTAURANT.PATH.replace(':id', id),
    encrypt(JSON.stringify({ halls, menus, managerId })),
  ].join('#')
}
