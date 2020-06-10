import styled from "styled-components";
import { colors, fonts } from "../../../../themes";

const Button = styled("div")`
  display: flex;
  color: ${({ color }) => (color ? color : colors.orange)};
  font-family: ${fonts.normal};
  vertical-align: top;
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: none;
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "14px")};
  line-height: 17px;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
`;
const ButtonIcon = styled("div")`
margin-left: 3px;
`;
export { Button, ButtonIcon };
