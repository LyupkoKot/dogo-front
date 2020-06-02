import React from 'react'
import { IconButtonStyled, IconButtonImage, IconButtonText } from './view'

const IconButton = ({isActive, ...rest}) => {
  return (
    <IconButtonStyled isActive={isActive} {...rest}>
      <IconButtonImage/>
      <IconButtonText>
        {rest.children}
      </IconButtonText>
    </IconButtonStyled>
  )
}

export default IconButton
