import React from 'react'
// views
import { IconWrapper } from '../view'
// icons
import Icon from '../../../static/icons/arrowDown.svg'

const ArrowDown = ({ size, color }) => (
  <IconWrapper size={size} iconFill={color}>
    <Icon />
  </IconWrapper>
);

export default ArrowDown;
