import styled from "styled-components";
import { fonts, colors } from "../../../../../themes";

const OfferTitleCardStyled = styled("div")`
  display: flex;
  height: 143px;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  background: #ffffff;
  border-radius: 4px;
`;

const OfferTitleStyled = styled("div")`
  padding: 20px 0 0 10px;
  .title {
    font-size: 24px;
    color: ${colors.black};
    font-family: ${fonts.bold};
    display: inline-block;
  }
  .icon {
    display: inline-block;
    height: 15px;
    width: 16px;
    margin-left: 11px;
    background: url(../../../../../static/images/cat.svg);
  }
`;

const OfferPlaceDateStyled = styled("div")`
  padding: 0 0 20px 10px;
  display: flex;
  flex-direction: row;
`;
const OfferLocationStyled = styled("div")`
margin-left: 5px;
  .title {
    font-size: 12px;
    line-height: 15px;
    color: ${colors.gray};
    font-family: ${fonts.normal};
    display: inline-block;
    margin-left: 5px;
  }
  .icon {
    display: inline-block;
    height: 14px;
    width: 10px;

    background: url(../../../../../static/images/location.svg) no-repeat;
  }
`;
const OfferDateStyled = styled("div")`
  overflow: hidden;
  display: flex;
  margin-left: 2vw;
  .title {
    font-size: 12px;
    line-height: 15px;
    color: #828ba3;
    font-family: ${fonts.normal};
    display: inline-block;
    margin-left: 5px;
  }
  .icon {
    display: inline-block;
    height: 14px;
    width: 13px;

    background: url(../../../../../static/images/time.svg) no-repeat;
  }
`;
export {
  OfferTitleCardStyled,
  OfferTitleStyled,
  OfferDateStyled,
  OfferLocationStyled,
  OfferPlaceDateStyled
};
