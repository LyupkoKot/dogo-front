import styled from "styled-components";
import { colors, fonts } from "../../../themes";

const DescriptionWrapper = styled("div")`
  margin-top: 20px;
`;

const DescriptionTitleStyled = styled("div")`
  font-size: 14px;
  line-height: 17px;
  font-family: ${fonts.normal};
  color: ${({ color }) => (color ? color : colors.gray)};
`;
const DescriptionStyled = styled("div")`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  padding: 0px 65px 0 65px;
  background: ${({ color }) => (color ? color : colors.white)};
  border-radius: 4px;
`;

export { DescriptionWrapper, DescriptionStyled, DescriptionTitleStyled };
