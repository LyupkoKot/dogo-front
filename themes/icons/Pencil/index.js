import React from 'react'
// views
import { IconWrapper } from '../view'
// icons
import Icon from '../../../static/icons/edit.svg'

const Pencil = ({ size, color }) => (
    <IconWrapper size={size} iconFill={color}>
        <Icon />
    </IconWrapper>
);

export default Pencil;

