import styles from './Menus.module.scss'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Scrollbar } from 'swiper'
import { Menu } from './'

import { ClientRestaurantContext } from 'context'
import 'swiper/css/scrollbar'
import { api } from 'utils'
import { MODELS } from 'constants'

export default function Menus() {
  const { restaurant } = React.useContext(ClientRestaurantContext)

  const [menus, setMenus] = React.useState([])

  React.useEffect(() => {
    api
      .getAll({
        model: MODELS.MENU.VALUE,
        params: { where: { id: restaurant.menus.map(({ id }) => id) } },
      })
      .then(({ data }) => setMenus(data))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>Поминальное меню</div>
      <div className={styles.slider}>
        <Swiper
          scrollbar
          freeMode={true}
          slidesPerView="auto"
          mousewheel={true}
          modules={[Mousewheel, Scrollbar]}
        >
          {menus.map(({ id, title, path }) => (
            <SwiperSlide key={id}>
              <Menu title={title} path={path} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
