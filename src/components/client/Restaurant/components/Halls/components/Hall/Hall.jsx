import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { List, Separator, SliderArrow } from 'components'

import styles from './Hall.module.scss'

export default function Hall({ hall }) {
  const { comment, gallery, info } = hall
  const sliderRef = React.useRef()

  return (
    <div className={styles.hall}>
      <div className={styles.gallery}>
        {gallery.length > 3 && (
          <React.Fragment>
            <SliderArrow
              sliderRef={sliderRef}
              className={styles.sliderArrow}
              direction="prev"
            />
            <SliderArrow
              sliderRef={sliderRef}
              className={styles.sliderArrow}
              direction="next"
            />
          </React.Fragment>
        )}
        <Swiper
          slidesPerView="auto"
          onBeforeInit={(swiper) => (sliderRef.current = swiper)}
        >
          {gallery.map((image, i) => (
            <SwiperSlide key={image + i}>
              <img
                src={process.env.REACT_APP_SERVER_URL + '/images/' + image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {info && <List list={info} className={styles.list} />}
      {comment && <p>{comment}</p>}
      <Separator />
    </div>
  )
}
