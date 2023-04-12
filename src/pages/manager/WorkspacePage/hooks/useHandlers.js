import React from 'react'

export default function useHandlers(user) {
  const [offer, setOffer] = React.useState({ restaurants: [] })

  React.useEffect(() => {
    if (user) {
      setOffer((prev) => ({ ...prev, managerId: user.id }))
    }
  }, [user])

  function add(data, halls, menus, setAdded) {
    const {
      id,
      preview,
      title,
      cardTitle,
      address,
      clientInfo: { relatedMetro },
    } = data

    if (halls.length === 0) {
      return alert('Добавьте хотя бы 1 зал')
    }

    if (menus.length === 0) {
      return alert('Добавьте хотя бы 1 меню')
    }

    setOffer((prev) => ({
      ...prev,
      restaurants: [
        ...prev.restaurants,
        {
          id,
          preview,
          title,
          cardTitle,
          address,
          halls,
          menus: menus.map(({ id, deposit, persons }) => ({
            id,
            deposit,
            persons,
          })),
          clientInfo: { relatedMetro },
        },
      ],
    }))
    setAdded(true)
  }

  function clear() {
    setOffer((prev) => ({ ...prev, restaurants: [] }))
  }

  function remove(id, setAdded) {
    setOffer((prev) => ({
      ...prev,
      restaurants: prev.restaurants.filter(
        (restaurant) => restaurant.id !== id
      ),
    }))

    if (setAdded) {
      setAdded(false)
    }
  }

  function update(id, halls, menus) {
    if (halls.length === 0) {
      return alert('Добавьте хотя бы 1 зал')
    }

    if (menus.length === 0) {
      return alert('Добавьте хотя бы 1 меню')
    }

    setOffer((prev) => ({
      ...prev,
      restaurants: prev.restaurants.map((restaurant) => {
        if (restaurant.id === id) {
          restaurant.halls = halls

          restaurant.menus = menus.map(({ id, deposit, persons }) => ({
            id,
            deposit,
            persons,
          }))
        }

        return restaurant
      }),
    }))
  }

  function sort(id, direction) {
    setOffer((prev) => {
      const arr = prev.restaurants

      const index = arr.findIndex((restaurant) => restaurant.id === id)
      const siblingIndex = direction === 'UP' ? index - 1 : index + 1

      function swap(arr, a, b) {
        return arr.map((current, idx) => {
          if (idx === a) return arr[b]
          if (idx === b) return arr[a]
          return current
        })
      }

      return { ...prev, restaurants: swap(arr, index, siblingIndex) }
    })
  }

  return [offer, { add, clear, remove, update, sort }]
}
