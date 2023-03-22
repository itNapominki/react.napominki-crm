import styles from './Menus.module.scss'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Scrollbar } from 'swiper'
import { ClientCard } from 'components'
import { Menu } from './'

import { ClientRestaurantContext } from 'core/context'
import 'swiper/css/scrollbar'

export default function Menus() {
  const {
    restaurant: { menus },
    decrypted,
  } = React.useContext(ClientRestaurantContext)

  const shown = decrypted
    ? menus.filter(({ file }) => decrypted.menus.find((id) => id === file.id))
    : menus

  return (
    <ClientCard>
      <div className={styles.title}>Поминальное меню</div>
      <div className={styles.slider}>
        <Swiper
          scrollbar
          freeMode={true}
          slidesPerView="auto"
          mousewheel={true}
          modules={[Mousewheel, Scrollbar]}
        >
          {shown.map(({ file }) => (
            <SwiperSlide key={file.id}>
              <Menu data={file} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ClientCard>
  )
}
