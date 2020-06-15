import React from "react";
import { Button, ButtonIcon } from "./view";
import Icon from "../../Icon";


const TextButton = ({ icon, iconSize, iconColor, label, isIcon, ...rest }) => {
  return (
    <Button {...rest}>
      {label}
        {icon && <ButtonIcon >
        <Icon icon={icon} iconColor={iconColor} iconSize={iconSize}/>
      </ButtonIcon>}
    </Button>
  );
};

export default TextButton;
