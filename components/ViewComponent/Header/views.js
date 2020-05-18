import styled from "styled-components";

const HeaderWrapper = styled("div")`
  display: flex;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.14);
  justify-content: center;
  min-width: 1270px;
  background-color: white;
`;
const HeaderStyled = styled("div")`
  height: 70px;
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`;

export { HeaderStyled, HeaderWrapper };
