import React from 'react'
import { IconButtonStyled, IconButtonImage, IconButtonText } from './view'

const IconButton = ({isActive, photo, ...rest}) => {
  return (
    <IconButtonStyled isActive={isActive} {...rest}>
      <IconButtonImage src={photo}/>
      <IconButtonText>
        {rest.children}
      </IconButtonText>
    </IconButtonStyled>
  )
}

export default IconButton
