import React from 'react'
// views
import { IconWrapper } from '../view'
// icons
import Icon from '../../../static/icons/rubbish.svg'

const Trash = ({ size, color }) => (
    <IconWrapper size={size} iconFill={color}>
        <Icon />
    </IconWrapper>
);

export default Trash;

