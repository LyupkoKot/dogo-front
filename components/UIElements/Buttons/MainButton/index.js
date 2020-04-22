import React from "react";
import { Button } from "./views";

const MainButton = ({ label, ...rest }) => {
  return <Button {...rest}>{label}</Button>;
};

export default MainButton;
