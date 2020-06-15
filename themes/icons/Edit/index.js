import React from 'react'
// views
import { IconWrapper } from '../view'
// icons
import Icon from '../../../static/icons/pen.svg'

const Edit = ({ size, color }) => (
    <IconWrapper size={size} iconFill={color}>
        <Icon />
    </IconWrapper>
);

export default Edit;

