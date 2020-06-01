import React from 'react'
import InputStyled from './views'

const Input = ({ placeholder, type, ...rest }) => {
  return (
    <InputStyled placeholder={placeholder} type={type} {...rest}/>
  )
}

export default Input
