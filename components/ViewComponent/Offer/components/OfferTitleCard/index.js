import React from "react";
import {
  OfferDateStyled,
  OfferEditButton,
  OfferLocationStyled,
  OfferPlaceDateStyled,
  OfferTitleCardInfo,
  OfferTitleCardStyled,
  OfferTitleStyled,
  SexIconStyled
} from "./view";
import Icon from "../../../../UIElements/Icon/index";
import { colors, fonts } from "../../../../../themes";
import TextIcon from "../../../../UIElements/TextIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import TextButton from "../../../../UIElements/Buttons/TextButton";

const OfferTitleCard = ({ offer }) => {
  console.log(offer);
  return (
    <OfferTitleCardStyled>
      {offer&&<div>
        <OfferTitleStyled>
          <div className="title">{offer.title}</div>
          <SexIconStyled>
                 <Icon icon={offer.animal_type} iconSize={18} />
          </SexIconStyled>
          <OfferEditButton>
            <Link href={`/offer/edit`}>
              <TextButton label={"Edytuj"} icon={"edit"} />
            </Link>
          </OfferEditButton>
        </OfferTitleStyled>

        <OfferTitleCardInfo>
          <TextIcon icon={offer.sex} text={offer.sex} />
          <TextIcon icon={"ruler"} text={offer.size} iconSize={17} />
          <TextIcon icon={"cake"} text={offer.age} iconSize={15} />
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
      </div>}
    </OfferTitleCardStyled>
  );
};

export default OfferTitleCard;
