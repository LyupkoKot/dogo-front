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
import { transformDate } from '../../../../utils/functions'

const Card = ({ offer, setOffer }) => {
  return (
    <CardStyled>
      <CardImageStyled />
        <CardDescriptionStyled>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flex: 2}}>
            <div style={{width: '70%', display: 'flex', flexDirection: 'column'}}>
              <CardHeader>{offer.title}</CardHeader>
              <CardSubHeader>
                {offer.description.length >= 100 ? `${offer.description.slice(0, 100)}...` : offer.description}
              </CardSubHeader>
            </div>
            <div style={{display: 'flex'}}>
              <CardLike>
                <input type="checkbox" />
                <span />
              </CardLike>
            </div>
          </div>
          <div style={{display: 'flex', flex: 2, paddingTop: '10px'}}>
            <CardCategory>
              <div/>
              <label>{offer.animal_type}</label>
            </CardCategory>
            <CardCategory>
              <div/>
              <label>{offer.sex}</label>
            </CardCategory>
            <CardCategory image={'../../../../static/icons/cake.svg'}>
              <div/>
              <label>{offer.age}</label>
            </CardCategory>
            <CardCategory image={'../../../../static/icons/ruler.svg'}>
              <div/>
              <label>{offer.size}</label>
            </CardCategory>
          </div>
          <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
              <CardCategory image={'../../../../static/images/geotag.svg'}>
                <div/>
                <label>{offer.city}</label>
              </CardCategory>
              <CardCategory image={'../../../../static/images/clock.svg'}>
                <div/>
                <label>{transformDate(offer.modified_date)}</label>
              </CardCategory>
            </div>
            <CardButton onClick={()=>setOffer(offer)}>
              <Link href={"offer/[id]"} as={`/offer/${offer.id}`}>
                <CardButtonImage />
              </Link>
            </CardButton>
          </div>
        </CardDescriptionStyled>
      </CardStyled>
  );
};

export default Card;
