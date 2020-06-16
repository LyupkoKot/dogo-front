import styled from "styled-components";

const OfferImageStyled = styled("div")`
  min-width: 445px;
  height: 235px;
  background-image: ${({ offer }) =>
    offer.animal_type === "Kot"
      ? `url(../../../../../static/images/catbig.jpg)`
      : `url(../../../../../static/images/dogbig.jpg)`};
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
  border-radius: 5px;
`;
export { OfferImageStyled };
