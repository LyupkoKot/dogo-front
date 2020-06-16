import React from "react";
import {
  OfferCardDescription,
  OfferCardImage,
  OfferCardImageWrapper,
  OfferCardInfoBottom,
  OfferCardInfoTop,
  OfferCardName,
  OfferCardStyled,
  OfferCardWrapper,
  OfferEdit,
  TrashBucket
} from "./view";
import TextIcon from "../../UIElements/TextIcon";
import { colors, fonts } from "../../../themes";
import { OfferLocationStyled } from "../Offer/components/OfferTitleCard/view";
import Icon from "../../UIElements/Icon";
import { CookiesManagerContext } from "../../../contextProviders/cookiesManager";
import { useDispatch } from 'react-redux'
import { setOfferValue } from '../../../actions/setOfferValue'
import { useRouter } from 'next/router'

const OfferCardSmall = ({ offer, handleClick }) => {
  const cookies = React.useContext(CookiesManagerContext);
  const userToken = cookies.cookiesManager.getToken("x-auth-token");

  const dispatch = useDispatch()

  const router = useRouter()

  const handleDelete = () => {
    console.log("delete");
    fetch(`http://77.55.221.84:3102/zpi/api/advertisement/${offer.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userToken
      },
      credentials: "same-origin"
    });
  };

  const handleEdit = () => {
    dispatch(setOfferValue(offer))
    router.push('/offer/edit')
  }

  return (
    <OfferCardWrapper >
      <OfferCardStyled>
        <OfferCardImageWrapper>
          <OfferCardImage onClick={() => handleClick(offer)} offer={offer}/>
          <TrashBucket onClick={handleDelete}>
            <Icon icon={"trash"} />
          </TrashBucket>
          <OfferEdit onClick={handleEdit}>
            <Icon icon={"pencil"} iconColor={colors.white} iconSize={20} />
          </OfferEdit>
        </OfferCardImageWrapper>

        <OfferCardDescription>
          <OfferCardName>{offer.title}</OfferCardName>
          <OfferCardInfoTop>
            <TextIcon icon={offer.animal_type} text={offer.animal_type} />
            <TextIcon icon={offer.sex} text={offer.sex} />
            <TextIcon icon={"ruler"} text={offer.size} iconSize={17} />
          </OfferCardInfoTop>
          <OfferCardInfoBottom>
            <TextIcon
              icon={"time"}
              iconSize={13}
              text={offer.due_date}
              textSize={14}
              textFont={fonts.normal}
            />
            <OfferLocationStyled>
              <TextIcon
                icon={"location"}
                text={offer.city}
                textSize={12}
                textFont={fonts.normal}
                iconColor={colors.gray}
              />
            </OfferLocationStyled>
          </OfferCardInfoBottom>
        </OfferCardDescription>
      </OfferCardStyled>
    </OfferCardWrapper>
  );
};

export default OfferCardSmall;
