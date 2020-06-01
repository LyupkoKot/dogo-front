import React from "react";
import {
  OfferDateStyled,
  OfferLocationStyled,
  OfferPlaceDateStyled,
  OfferTitleCardStyled,
  OfferTitleStyled
} from "./view";
import Icon from "../../../../UIElements/Icon/index";
import { colors, fonts } from "../../../../../themes";
import TextIcon from "../../../../UIElements/TextIcon";

const OfferTitleCard = () => {
  return (
    <OfferTitleCardStyled>
      <OfferTitleStyled>
        <div className="title">{"Maria"}</div>
        <div className="icon"></div>
      </OfferTitleStyled>
      <OfferPlaceDateStyled>
        <OfferLocationStyled>
            <TextIcon
                icon={"location"}
                text={"Wroclaw"}
                textSize={12}
                textFont={fonts.normal}
            />
        </OfferLocationStyled>
        <OfferDateStyled>
          <TextIcon
            icon={"time"}
            iconSize={13}
            text={"14 Sierpnia"}
            textSize={12}
            textFont={fonts.normal}
          />
        </OfferDateStyled>
      </OfferPlaceDateStyled>
    </OfferTitleCardStyled>
  );
};

export default OfferTitleCard;
