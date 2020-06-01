import React from "react";
import { Button, ButtonIcon } from "./view";
import Icon from "../../Icon";
import { colors } from "../../../../themes";

const ReportButton = ({ label, ...rest }) => {
  return (
    <Button {...rest}>
      {label}
      <ButtonIcon>
        <Icon icon={"report"} iconSize={15} iconColor={colors.orange} />
      </ButtonIcon>
    </Button>
  );
};

export default ReportButton;
