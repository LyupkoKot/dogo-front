import React from "react"
import {
  OfferDateStyled, OfferEditButton,
  OfferLocationStyled,
  OfferPlaceDateStyled, OfferTitleCardInfo,
  OfferTitleCardStyled,
  OfferTitleStyled,
  SexIconStyled
} from './view'
import Icon from "../../../../UIElements/Icon/index"
import { colors, fonts } from "../../../../../themes"
import TextIcon from "../../../../UIElements/TextIcon"
import Link from 'next/link'
import { useRouter } from 'next/router'
import EditButton from "../../../../UIElements/Buttons/TextButton"

const OfferTitleCard = ({ offer }) => {

  const router = useRouter()

  return (
    <OfferTitleCardStyled>
      <OfferTitleStyled>
        <div className="title">{offer.title}</div>
        <SexIconStyled>
          <Icon icon={offer.animal_type} iconSize={18} />
        </SexIconStyled>
        <OfferEditButton>
          <Link href={`/offer/edit`}>
            <EditButton label={"Edytuj"} icon={"pencil"}/>
          </Link>
        </OfferEditButton>
      </OfferTitleStyled>

      <OfferTitleCardInfo>
        <TextIcon icon={offer.sex} text={offer.sex} />
        <TextIcon icon={"ruler"} text={offer.size} iconSize={17}/>
        <TextIcon icon={"cake"} text={offer.age} iconSize={15}/>
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
