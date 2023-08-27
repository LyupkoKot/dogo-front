import styled from "styled-components";
import { colors, fonts } from '../../../../themes'


const Button = styled("button")`
  width: ${({ width }) => (width ? width : "100%")};
  height: 44px;
  padding: 4px 13px;
  margin: ${props => props.margin ? props.margin : '0'};
  background: ${colors.orange};
  color: ${({ color }) => (color ? color : colors.black)};
  font-family: ${fonts.bold};
  display: inline-block;
  vertical-align: top;
  border-radius: 3px;
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
  outline: 0;
  -webkit-tap-highlight-color: transparent;
`;
export { Button };
