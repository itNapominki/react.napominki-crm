import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { List, Separator, SliderArrow } from 'components'

export default function Hall({ hall }) {
  const { comment, gallery, info } = hall
  const sliderRef = React.useRef()

  return (
    <div className="cm-restaurant__hall">
      <div className="cm-restaurant__gallery">
        {gallery.length > 3 && (
          <React.Fragment>
            <SliderArrow
              sliderRef={sliderRef}
              className="cm-restaurant__gallery-arrow"
              direction="prev"
            />
            <SliderArrow
              sliderRef={sliderRef}
              className="cm-restaurant__gallery-arrow"
              direction="next"
            />
          </React.Fragment>
        )}
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onBeforeInit={(swiper) => (sliderRef.current = swiper)}
        >
          {gallery.map((image, i) => (
            <SwiperSlide key={image + i}>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="cm-restaurant__gallery-row row">
          {gallery.map((image, i) => (
            <img key={image + i} src={image} className="col col-4" />
          ))}
        </div> */}
      </div>
      {info && <List list={info} className="cm-restaurant__list" />}
      {comment && <p className="cm-restaurant__comment">{comment}</p>}
      <Separator />
    </div>
  )
}
