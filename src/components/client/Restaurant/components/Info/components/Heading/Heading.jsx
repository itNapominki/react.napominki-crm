import React from 'react'
import { HandySvg } from 'handy-svg'
import { RestaurantContext } from 'context'
import { joinStrings } from 'utils'

import cafeIcon from 'sprites/cafe.svg'
import markerIcon from 'sprites/marker.svg'
import metroIcon from 'sprites/metro.svg'

export default function Heading() {
  const context = React.useContext(RestaurantContext)

  const { address, clientInfo, title, cardTitle } = context
  const { relatedMetro } = clientInfo
  return (
    <div className="cm-restaurant__heading">
      <div className="cm-restaurant__title">{cardTitle}</div>
      <div className="cm-restaurant__location">
        <div className="cm-restaurant__location-row">
          <div className="cm-restaurant__location-item">
            <div className="cm-restaurant__location-icon">
              <HandySvg src={cafeIcon} />
            </div>
            <div className="cm-restaurant__location-text">{title}</div>
          </div>
          <div className="cm-restaurant__location-item">
            <div className="cm-restaurant__location-icon">
              <HandySvg src={markerIcon} />
            </div>
            <div className="cm-restaurant__location-text">
              {joinStrings([
                address.city.value.title,
                address.county.value.title,
                address.district.value.title,
                address.street,
                address.house,
              ])}
            </div>
          </div>
          {relatedMetro.length > 0 && (
            <div className="cm-restaurant__location-item">
              <div className="cm-restaurant__location-icon">
                <HandySvg src={metroIcon} />
              </div>
              <div className="cm-restaurant__location-text">
                {relatedMetro.map(({ id, title, distance }, i) => {
                  const distanceString = distance.toString()
                  const distanceLength = distanceString.length

                  const meters = distanceString.slice(-3) + ' м.'
                  const kilometers =
                    distanceLength > 3
                      ? distanceString.substring(0, distanceLength - 3) +
                        ' км. '
                      : null

                  const text =
                    title +
                    ' ' +
                    (kilometers ? kilometers : '') +
                    meters +
                    (i < relatedMetro.length - 1 ? ', ' : '')

                  return <React.Fragment key={id}>{text}</React.Fragment>
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
