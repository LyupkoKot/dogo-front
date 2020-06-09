import React from 'react'
import InputWideStyled from './view'

const InputWide = props => {
  return (
    <InputWideStyled placeholder={props.placeholder} width={props.width} rows={props.rows}/>
  )
}

export default InputWide
