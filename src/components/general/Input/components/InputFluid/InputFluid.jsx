import React from 'react'
import { useInput } from 'hooks'
// import InputMask from 'react-input-mask'
import Inputmask from 'inputmask'

export default function InputFluid(data) {
  const {
    disabled,
    onInput,
    type = 'text',
    value: defaultValue = '',
    mask,
  } = data

  const [value, setValue] = useInput(defaultValue, onInput)
  const inputRef = React.useRef()

  React.useEffect(() => {
    if (mask) {
      const nodeInput = inputRef.current
      const im = new Inputmask(mask[0], mask[1])

      im.mask(nodeInput)
    }
  }, [inputRef, mask])

  function handleInput(e) {
    setValue(e.target.value)
  }

  return (
    <input
      ref={inputRef}
      type={type}
      className="input__fluid"
      disabled={disabled}
      value={value}
      onInput={handleInput}
    />
  )
}
