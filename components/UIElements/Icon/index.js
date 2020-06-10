import * as React from "react";
// icon
import {Location, Social, Time, Phone, Mail, Report, Female, Ruler, Pussy, World, Dog, Male, Cake} from '../../../themes/icons/index'



const Icon = ({ icon, iconSize, iconColor }) => {
  const Icons = {
    time:() => <Time size={iconSize} color={iconColor}/>,
    location:() => <Location size={iconSize} color={iconColor}/>,
    social: () => <Social size={iconSize} color={iconColor}/>,
    phone: () => <Phone size={iconSize} color={iconColor}/>,
    mail: () => <Mail size={iconSize} color={iconColor}/>,
    report: () => <Report size={iconSize} color={iconColor}/>,
    ruler: () => <Ruler size={iconSize} color={iconColor}/>,
    Kot: () => <Pussy size={iconSize} color={iconColor}/>,
    Samica: () => <Female size={iconSize} color={iconColor}/>,
    world: () => <World size={iconSize} color={iconColor}/>,
    Pies: () => <Dog size={iconSize} color={iconColor}/>,
    Samiec: () => <Male size={iconSize} color={iconColor}/>,
    cake: () => <Cake size={iconSize} color={iconColor}/>,





  };
  const CurrentIcon = Icons[icon];

  return <CurrentIcon/>;
};

export default Icon;
