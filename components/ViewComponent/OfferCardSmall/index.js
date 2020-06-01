import React from "react";
import {
  OfferCardDescription,
  OfferCardImage,
  OfferCardInfoBottom,
  OfferCardInfoTop,
  OfferCardName,
  OfferCardStyled,
  OfferCardWrapper
} from "./view";
import OfferImage from "../Offer/components/OfferImage";
import TextIcon from "../../UIElements/TextIcon";
import { fonts } from "../../../themes";
import { OfferLocationStyled } from "../Offer/components/OfferTitleCard/view";
import {DescriptionTitleStyled, DescriptionWrapper} from "../../UIElements/Description/view";

const OfferCardSmall = () => {
  return (
    <OfferCardWrapper>
      <DescriptionTitleStyled>Ogloszenia</DescriptionTitleStyled>
      <OfferCardStyled>
        <OfferCardImage />
        <OfferCardDescription>
          <OfferCardName>Maria</OfferCardName>
          <OfferCardInfoTop>
            <TextIcon icon={"pussy"} text={"Kot"} />
            <TextIcon icon={"female"} text={"Samica"} />
            <TextIcon icon={"ruler"} text={"40-60 cm"} />
          </OfferCardInfoTop>
          <OfferCardInfoBottom>
            <TextIcon
              icon={"time"}
              iconSize={13}
              text={"14 Sierpnia"}
              textSize={12}
              textFont={fonts.normal}
            />
            <OfferLocationStyled>
              <TextIcon
                icon={"location"}
                text={"Wroclaw"}
                textSize={12}
                textFont={fonts.normal}
              />
            </OfferLocationStyled>
          </OfferCardInfoBottom>
        </OfferCardDescription>
      </OfferCardStyled>
    </OfferCardWrapper>
  );
};

export default OfferCardSmall;
