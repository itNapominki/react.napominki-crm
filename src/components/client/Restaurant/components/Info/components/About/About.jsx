import React from 'react'
import { RestaurantContext } from 'context'
import { List, Separator } from 'components'

export default function About() {
  const context = React.useContext(RestaurantContext)

  const { clientInfo } = context
  const { info, comment, disabilityInfo } = clientInfo

  return (
    <React.Fragment>
      {(info || comment) && (
        <React.Fragment>
          <Separator />
          <div className="cm-restaurant__about">
            <div className="cm-restaurant__subtitle">О филиале</div>
            {info.length > 0 && (
              <List className="cm-restaurant__list" list={info} />
            )}
            {comment && <p className="cm-restaurant__comment">{comment}</p>}
          </div>
        </React.Fragment>
      )}

      {disabilityInfo.length > 0 && (
        <React.Fragment>
          <Separator />
          <div className="cm-restaurant__subtitle">
            Информация для людей с ограниченными возможностями
          </div>
          {disabilityInfo.length > 0 && (
            <List className="cm-restaurant__list" list={disabilityInfo} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
