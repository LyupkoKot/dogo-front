import styled from "styled-components";
import fonts from "../../../themes/fonts";
import colors from "../../../themes/colors";

const OfferCardWrapper = styled("div")`
  margin-top: 20px;
`;
const OfferCardStyled = styled("div")`
  display: inline-flex;
  flex-direction: column;
  background: ${({ color }) => (color ? color : colors.white)};
  border-radius: 3px;
  margin-top:5px;
`;
const OfferCardImage = styled("div")`
  width: 255px;
  height: 135px;
  background-image: url(../../../static/images/kot.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
  border-radius: 3px 3px 0px 0px;
`;
const OfferCardDescription = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 15px 20px;
`;

const OfferCardName = styled("div")`
  font-size: 18px;
  color: ${colors.black};
  font-family: ${fonts.bold};
`;
const OfferCardInfoTop = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 11px;
`;
const OfferCardInfoBottom = styled("div")`
  display: flex;
  flex-direction: row;
  margin-top: 47px;
`;
export {
  OfferCardStyled,
  OfferCardImage,
  OfferCardDescription,
  OfferCardWrapper,
  OfferCardName,
  OfferCardInfoTop,
    OfferCardInfoBottom
};
