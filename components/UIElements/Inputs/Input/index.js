import React from 'react'
import InputStyled from './views'

const Input = ({ placeholder, type, float, value, onChange, ...rest }) => {
  return (
    <InputStyled value={value} onChange={onChange} placeholder={placeholder} type={type} float={float} {...rest}/>
  )
}

export default Input
