import styled from "styled-components";
import fonts from "../../../../../themes/fonts";
import colors from "../../../../../themes/colors";

const UserDescriptionStyled = styled("div")`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-family: ${fonts.normal};
  margin-bottom: 20px;
  color: ${({ color }) => (color ? color : colors.black)};
`;
const UserDescriptionText = styled("div")`
  font-size: 14px;
  font-family: ${fonts.normal};
  margin-top: 20px;
  color: ${({ color }) => (color ? color : colors.black)};
`;

export { UserDescriptionStyled, UserDescriptionText };
