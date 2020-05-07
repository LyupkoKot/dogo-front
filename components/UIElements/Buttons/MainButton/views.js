import styled from "styled-components";
import { colors, fonts } from '../../../../themes'


const Button = styled("button")`
  width: ${({ width }) => (width ? width : "100%")};
  height: 44px;
  padding: 4px 13px;
  // TODO fix margins count
  margin-top: ${({marginTop}) => (marginTop ? marginTop : "0")};;
  margin-left: ${({marginLeft}) => (marginLeft ? marginLeft : "9%")};
  margin-right: ${({marginLeft}) => (marginLeft ? marginLeft : "5px")};
  // background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
  background: linear-gradient(90deg, #FF7C30 0%, #FF9C47 100%);
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
