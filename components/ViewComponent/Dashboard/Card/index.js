import React from "react";
import {
  CardStyled,
  CardImageStyled,
  CardDescriptionStyled,
  CardHeader,
  CardSubHeader,
  CardButton,
  CardButtonImage,
  CardLike,
  CardCategory
} from "./views";
import Link from "next/link";

const Card = ({ offer, setOffer }) => {
  return (
    <CardStyled>
      <CardImageStyled />
      <CardDescriptionStyled>
        <CardHeader>{offer.title}</CardHeader>
        <CardSubHeader>
          {offer.description}
        </CardSubHeader>
        <CardLike>
          <input type="checkbox" />
          <span />
        </CardLike>
        <CardButton onClick={()=>setOffer(offer)}>
          <Link href={"offer/[id]"} as={`/offer/${offer.id}`}>
            <CardButtonImage />
          </Link>
        </CardButton>
        <CardCategory>
          <div />
          <label>{offer.animal_type}</label>
        </CardCategory>
      </CardDescriptionStyled>
    </CardStyled>
  );
};

export default Card;
