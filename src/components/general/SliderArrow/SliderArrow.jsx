import './SliderArrow.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'
import { classNames } from 'utils'
import sliderArrowIcon from 'sprites/slider-arrow.svg'

export default function SliderArrow({ className, direction, sliderRef }) {
  function handleClick() {
    direction === 'prev'
      ? sliderRef.current?.slidePrev()
      : sliderRef.current?.slideNext()
  }

  return (
    <button
      onClick={handleClick}
      className={classNames('slider-arrow', [className])}
      data-direction={direction}
    >
      <HandySvg src={sliderArrowIcon} />
    </button>
  )
}
