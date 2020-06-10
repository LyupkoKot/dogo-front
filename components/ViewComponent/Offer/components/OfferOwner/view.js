import styled from "styled-components";
import { fonts, colors } from "../../../../../themes";

const OwnerWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

const OwnerTopSection = styled("div")`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;
const OwnerBottomSection = styled("div")`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;


const OwnerImage = styled("div")`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 3px;
  img {
    vertical-align: top;
    max-width: 100%;
    min-width: 100%;
    width: initial;
    height: 100%;
  }
`;
const OwnerName = styled("div")`
  font-size: 14px;
  color: ${colors.black};
  font-family: ${fonts.bold};
  display: inline-block;
  margin-left: 10px;
`;

export { OwnerWrapper, OwnerTopSection, OwnerBottomSection, OwnerImage, OwnerName };
