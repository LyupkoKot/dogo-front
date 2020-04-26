import React from "react";
import { Button } from "./views";

const MainButton = ({ label, ...rest }) => {
  return (
    <Button
      {...rest}
      width={"160px"}
      color={"white"}
      fontfamily={"bold"}
    >
        {label}
    </Button>
  )
};

export default MainButton;
