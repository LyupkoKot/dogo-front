import styled from "styled-components";
import { fonts, colors } from "../../../themes";

const TextIconStyled = styled("div")`
  overflow: hidden;
  display: flex;
`;
const TextStyled = styled("div")`
    font-size: ${({ textSize }) => textSize}px;
    color: ${({ textColor }) => (textColor ? textColor : colors.gray)};
    font-family: ${({ textFont }) => (textFont ? textFont : fonts.normal)};
    margin-left: 5px;

`;

export { TextIconStyled, TextStyled };
