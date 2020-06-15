import styled from "styled-components";

const OfferWrapper = styled("div")`
  display: flex;
  justify-content: center;
  min-width: 1270px;
`;
const OfferStyled = styled("div")`
  width: 60%;
  display: flex;
  flex-direction: column;
`;
const OfferList = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 15px;
`;
export { OfferWrapper, OfferStyled, OfferList };
