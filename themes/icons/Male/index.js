import React from 'react'
// views
import { IconWrapper } from '../view'
// icons
import Icon from '../../../static/icons/male.svg'

const Male = ({ size, color }) => (
    <IconWrapper size={size} iconFill={color}>
        <Icon />
    </IconWrapper>
);

export default Male;

