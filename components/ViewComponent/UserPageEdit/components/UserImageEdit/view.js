import styled from "styled-components";

const ImageWrapper = styled("div")`
  box-sizing: border-box;
  width: 285px;
  height: 285px;
  border-radius: 4px;
`;
const ImageEditBox = styled("div")`
  position: relative;
  display: flex;
  height: 285px;
  overflow: hidden;
  cursor: pointer;
  justify-content: center;
`;
const ImageStyled = styled("div")`
  position: relative;
  img {
    width: 285px;
    height: 285px;
  }
`;

export { ImageWrapper, ImageEditBox, ImageStyled };
