import React from 'react'
// views
import { IconWrapper } from '../view'
// icons
import Icon from '../../../static/icons/arrowUp.svg'

const ArrowUp = ({ size, color }) => (
  <IconWrapper size={size} iconFill={color}>
    <Icon />
  </IconWrapper>
);

export default ArrowUp;
