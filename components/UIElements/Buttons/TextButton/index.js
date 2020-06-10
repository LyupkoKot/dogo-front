import React from "react";
import { Button, ButtonIcon } from "./view";
import Icon from "../../Icon";


const TextButton = ({ icon, iconSize, label, isIcon, ...rest }) => {
  return (
    <Button {...rest}>
      {label}
        {icon && <ButtonIcon >
        <Icon icon={icon} iconSize={iconSize}/>
      </ButtonIcon>}
    </Button>
  );
};

export default TextButton;
