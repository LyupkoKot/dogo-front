import styled from "styled-components";
import { fonts, colors } from "../../../../../themes";

const OfferDescriptionWrapper = styled("div")`
  margin-top: 20px;
`;
const DescriptionTitleStyled = styled("div")`
  font-size: 14px;
  line-height: 17px;
  font-family: ${fonts.normal};
  color: ${({ color }) => (color ? color : colors.gray)};
`;
const OfferDescriptionStyled = styled("div")`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  padding: 0px 65px 0 65px;
  background: ${({ color }) => (color ? color : colors.white)};
  border-radius: 4px;
`;
const DescriptionTextStyled = styled("div")`
  font-size: 12px;
  font-family: ${fonts.normal};
  margin-top: 20px;
  color: ${({ color }) => (color ? color : colors.black)};
`;
const DescriptionListStyled = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding: 3px 0 21px 0;
  li {
    padding: 17px 0 0 0;
  }
`;
const ParameterTitleStyled = styled("div")`
  font-size: 14px;
  line-height: 17px;
  color: ${({ color }) => (color ? color : colors.gray)};
  font-family: ${fonts.bold};
  .parameter {
  font-size: 14px;
  color: ${({ color }) => (color ? color : colors.black)};
  font-family: ${fonts.normal};
  }
`;

export {
  OfferDescriptionWrapper,
  OfferDescriptionStyled,
  DescriptionTextStyled,
  DescriptionTitleStyled,
  DescriptionListStyled,
  ParameterTitleStyled
};
