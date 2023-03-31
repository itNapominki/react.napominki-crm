import styles from './Halls.module.scss'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Comment, List, Separator, SliderArrow } from 'components/general'

export default function Hall({ data }) {
  const { comment, gallery, info } = data
  const sliderRef = React.useRef()

  const WINDOW_WIDTH = window.width

  return (
    <div className={styles.hall}>
      <div className={styles.hall__gallery}>
        {
          <React.Fragment>
            <SliderArrow
              sliderRef={sliderRef}
              className={styles.hall__sliderArrow}
              direction="prev"
            />
            <SliderArrow
              sliderRef={sliderRef}
              className={styles.hall__sliderArrow}
              direction="next"
            />
          </React.Fragment>
        }
        <Swiper
          slidesPerView="auto"
          onBeforeInit={(swiper) => (sliderRef.current = swiper)}
        >
          {gallery.map((image, i) => (
            <SwiperSlide key={image + i}>
              <img src={process.env.REACT_APP_SERVER_URL + image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {info && <List list={info} className={styles.hall__list} />}
      {comment && (
        <Comment
          className={styles.hall__comment}
          text={comment}
          show={WINDOW_WIDTH > 650 ? 400 : 200}
        />
      )}
      <Separator />
    </div>
  )
}
