import styled from "styled-components";
import { colors, fonts } from '../../../../themes'


const Button = styled("button")`
  width: ${({ width }) => (width ? width : "100%")};
  padding: 13px 28px 11px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : colors.yellow)};
  color: ${({ color }) => (color ? color : colors.black)};
  font-family: ${fonts.normal};
  display: inline-block;
  vertical-align: top;
  border-radius: 6px;
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;
  font-size: 16px;
  line-height: normal;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
`;
export { Button };
