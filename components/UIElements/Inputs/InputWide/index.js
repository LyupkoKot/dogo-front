import React from 'react'
import InputWideStyled from './view'

const InputWide = props => {
  return (
    <InputWideStyled
      placeholder={props.placeholder}
      width={props.width}
      rows={props.rows}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default InputWide
