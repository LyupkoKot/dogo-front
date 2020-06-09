import React from 'react'
import InputStyled from './views'

const Input = ({ placeholder, type, float, ...rest }) => {
  return (
    <InputStyled placeholder={placeholder} type={type} float={float} {...rest}/>
  )
}

export default Input
