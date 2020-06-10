import React from "react";
import {
    OfferDateStyled,
    OfferLocationStyled,
    OfferPlaceDateStyled, OfferTitleCardInfo,
    OfferTitleCardStyled,
    OfferTitleStyled,
    SexIconStyled
} from "./view";
import Icon from "../../../../UIElements/Icon/index";
import { colors, fonts } from "../../../../../themes";
import TextIcon from "../../../../UIElements/TextIcon";
import { OfferCardInfoTop } from "../../../OfferCardSmall/view";

const OfferTitleCard = ({ offer }) => {
  return (
    <OfferTitleCardStyled>
      <OfferTitleStyled>
        <div className="title">{offer.title}</div>
        <SexIconStyled>
          <Icon icon={offer.animal_type} iconSize={18} />
        </SexIconStyled>
      </OfferTitleStyled>

      <OfferTitleCardInfo>
        <TextIcon icon={offer.sex} text={offer.sex} />
        <TextIcon icon={"ruler"} text={offer.size} />
        <TextIcon icon={"cake"} text={offer.age} />
      </OfferTitleCardInfo>

      <OfferPlaceDateStyled>
        <OfferLocationStyled>
          <TextIcon
            icon={"location"}
            text={offer.city}
            textSize={12}
            textFont={fonts.normal}
            iconColor={colors.gray}
          />
        </OfferLocationStyled>
        <OfferDateStyled>
          <TextIcon
            icon={"time"}
            iconSize={13}
            text={offer.due_date}
            textSize={14}
            textFont={fonts.normal}
          />
        </OfferDateStyled>
      </OfferPlaceDateStyled>
    </OfferTitleCardStyled>
  );
};

export default OfferTitleCard;
