import React from "react";
import { Button } from "./views";

const MainButton = ({ label, margin, ...rest }) => {
  return (
    <Button
      {...rest}
      width={"160px"}
      color={"white"}
      fontfamily={"bold"}
      margin={margin}
    >
        {label}
    </Button>
  )
};

export default MainButton;
