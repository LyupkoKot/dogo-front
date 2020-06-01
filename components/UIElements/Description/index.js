import React from "react";
import { DescriptionStyled, DescriptionWrapper, DescriptionTitleStyled } from "./view";

const Description = ({ title, content, textColor, backgroundColor }) => {
  return (
    <DescriptionWrapper>
      <DescriptionTitleStyled color={textColor}>{title}</DescriptionTitleStyled>
      <DescriptionStyled color={backgroundColor}>{content}</DescriptionStyled>
    </DescriptionWrapper>
  );
};

export default Description;
