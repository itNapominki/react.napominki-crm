import './SliderArrow.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { classNames } from 'utils'
import { useWindowDimensions } from 'hooks'

import sliderArrowIcon from 'assets/sprites/slider-arrow.svg'

export default function SliderArrow({ className, direction, sliderRef }) {
  function handleClick() {
    direction === 'prev'
      ? sliderRef.current?.slidePrev()
      : sliderRef.current?.slideNext()
  }

  const [disabled, setDisabled] = React.useState(false)

  const windowDimensions = useWindowDimensions()

  React.useEffect(() => {
    if (sliderRef.current) {
      setDisabled(
        !sliderRef.current[
          'allowSlide' + direction.charAt(0).toUpperCase() + direction.slice(1)
        ]
      )
    }
  }, [sliderRef.current, windowDimensions.width])

  return (
    <button
      onClick={handleClick}
      className={classNames('slider-arrow', [className])}
      data-direction={direction}
      disabled={disabled}
    >
      <HandySvg src={sliderArrowIcon} />
    </button>
  )
}
