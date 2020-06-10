import React from 'react'
// views
import { IconWrapper } from '../view'
// icons
import Icon from '../../../static/icons/world.svg'

const World = ({ size, color }) => (
    <IconWrapper size={size} iconFill={color}>
        <Icon />
    </IconWrapper>
);

export default World;

