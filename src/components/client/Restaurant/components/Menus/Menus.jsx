import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Scrollbar } from 'swiper'
import { ClientCard } from 'components'
import { RestaurantContext } from 'context'
import 'swiper/css/scrollbar'

import styles from './Menus.module.scss'

export default function Menus() {
  const context = React.useContext(RestaurantContext)
  const { menus } = context

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
          {menus.map((menu, i) => (
            <SwiperSlide key={i}>
              <div className={styles.item}>
                <img src="/menu-pdf.svg" alt="" />
                <div className={styles.itemTitle}>{menu.title}</div>
                <a
                  href={
                    process.env.REACT_APP_SERVER_URL + '/menus/' + menu.filename
                  }
                  className={styles.itemLink}
                  target="_blank"
                >
                  Скачать меню
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ClientCard>
  )
}
