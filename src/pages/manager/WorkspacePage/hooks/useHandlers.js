import React from 'react'

export default function useHandlers() {
  const [offer, setOffer] = React.useState([])

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

    setOffer((prev) => [
      ...prev,
      {
        id,
        preview,
        title,
        cardTitle,
        address,
        halls,
        menus,
        clientInfo: { relatedMetro },
      },
    ])
    setAdded(true)
  }

  function clear() {
    setOffer([])
  }

  function remove(id, setAdded) {
    setOffer((prev) => prev.filter((restaurant) => restaurant.id !== id))

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

    setOffer((prev) =>
      prev.map((restaurant) => {
        if (restaurant.id === id) {
          restaurant.halls = halls
          restaurant.menus = menus
        }

        return restaurant
      })
    )
  }

  return [offer, { add, clear, remove, update }]
}
