import React from 'react'
import { HandySvg } from 'handy-svg'

import { Spinner } from 'components'

import uploadIcon from 'assets/sprites/upload.svg'

export default function Fluid({ background, uploaded }) {
  return (
    <div
      className="__fluid"
      style={{
        backgroundImage: `url(${
          background.includes('blob') || background.length === 0
            ? background
            : process.env.REACT_APP_SERVER_URL + background
        })`,
      }}
    >
      <Spinner show={!uploaded} className="__spinner" />
      <div className="__button">
        <HandySvg src={uploadIcon} />
      </div>
    </div>
  )
}
