import React from 'react';
import {TextIconStyled, TextStyled} from "./view";
import Icon from "../Icon";

const TextIcon = ({icon, iconSize, iconColor, text, textSize, textColor, textFont}) => {
    return (
        <TextIconStyled>
            <Icon icon={icon} iconSize={iconSize} iconColor={iconColor}/>
            <TextStyled textSize={textSize} textColor={textColor} textFont={textFont}>{text}</TextStyled>
        </TextIconStyled>
    );
};

export default TextIcon;
