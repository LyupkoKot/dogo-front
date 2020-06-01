import React from 'react'
import { IconButtonStyled, IconButtonImage, IconButtonText } from './view'

const IconButton = props => {
  return (
    <IconButtonStyled isActive={props.isActive}>
      <IconButtonImage/>
      <IconButtonText>
        {props.children}
      </IconButtonText>
    </IconButtonStyled>
  )
}

export default IconButton
