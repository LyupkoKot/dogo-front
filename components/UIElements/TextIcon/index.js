import * as React from "react";
// icon
import {Location, Time} from '../../../themes/icons/index'

const TextIcon = ({ icon, iconSize, iconColor }) => {
  const Icons = {
    time:() => <Time size={iconSize} color={iconColor}/>,
    location:() => <Location size={iconSize} color={iconColor}/>
  };
  const Icon = Icons[icon];

  return <Icon/>;
};

export default TextIcon;
