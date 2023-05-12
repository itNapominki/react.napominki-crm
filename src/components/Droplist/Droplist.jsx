import styles from './Droplist.module.scss'
import React from 'react'

import { DroplistItem } from './'

import { classNames } from 'utils'
import { useDroplist } from './hooks'

export default React.memo(
  function Droplist({
    items = [],
    className,
    visible,
    setVisible,
    closeOnItemClick = true,
    selected = [],
  }) {
    // console.log('render Droplist')

    useDroplist({ visible, setVisible })

    return (
      <div
        className={classNames(styles.container, [
          'js-droplist',
          className,
          visible && '_visible',
        ])}
      >
        {items &&
          items.map((item, i) => (
            <DroplistItem
              key={i}
              item={item}
              setVisible={setVisible}
              closeOnItemClick={closeOnItemClick}
              selected={selected.indexOf(i) !== -1}
            />
          ))}
      </div>
    )
  },
  (prevProps, nextProps) =>
    prevProps.visible === nextProps.visible &&
    prevProps.droplist === !nextProps.droplist
)
