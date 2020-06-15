import React, { useEffect, useState } from "react";
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
import { transformDate } from "../../../../utils/functions";
import { CookiesManagerContext } from "../../../../contextProviders/cookiesManager";
import Icon from "../../../UIElements/Icon";
import {
  OfferTitleCardInfo,
  SexIconStyled
} from "../../Offer/components/OfferTitleCard/view";
import TextIcon from "../../../UIElements/TextIcon";

const Card = ({ offer, setOffer }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Insert API url below
    const apiUrl = `http://77.55.221.84:3102/zpi/api/bookmarks`;
    fetch("http://77.55.221.84:3102/zpi/api/bookmarks", {
      method: "GET",
      headers: {
        "x-auth-token": userToken
      }
    })
      .then(res => res.json())
      .then(response => {
        response.some(e => e.id === offer.id)
          ? setIsActive(true)
          : setIsActive(false);
        console.log(response.some(e => e.id === offer.id));
      })
      .catch(error => console.log(error));
  }, []);
  const cookies = React.useContext(CookiesManagerContext);
  const userToken = cookies.cookiesManager.getToken("x-auth-token");

  const handleCreate = () => {
    isActive ? setIsActive(false) : setIsActive(true);

    !isActive &&
      fetch(`http://77.55.221.84:3102/zpi/api/bookmarks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        },
        credentials: "same-origin",
        body: JSON.stringify({
          advertisement_id: offer.id
        })
      });
    isActive &&
      fetch(`http://77.55.221.84:3102/zpi/api/bookmarks/${offer.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userToken
        },
        credentials: "same-origin",
        body: JSON.stringify({
          user_id: offer.publisher_id,
          advertisement_id: offer.id
        })
      });
  };

  return (
    <CardStyled>
      <CardImageStyled />
      <CardDescriptionStyled>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 2
          }}
        >
          <div
            style={{ width: "70%", display: "flex", flexDirection: "column" }}
          >
            <CardHeader>{offer.title}</CardHeader>
            <CardSubHeader>
              {offer.description.length >= 100
                ? `${offer.description.slice(0, 100)}...`
                : offer.description}
            </CardSubHeader>
          </div>
          <div style={{ display: "flex" }}>
            <CardLike onClick={handleCreate} isActive={isActive}>
              <input type="checkbox" />
              <span />
            </CardLike>
          </div>
        </div>
        <div style={{ display: "flex", flex: 2, paddingTop: "10px" }}>
          <CardCategory>
            <Icon icon={offer.animal_type} iconSize={18} />
            <label>{offer.animal_type}</label>
          </CardCategory>
          <CardCategory>
            <TextIcon icon={offer.sex} text={offer.sex} />
            <label>{offer.sex}</label>
          </CardCategory>
          <CardCategory image={"../../../../static/icons/cake.svg"}>
            <div />
            <label>{offer.age}</label>
          </CardCategory>
          <CardCategory image={"../../../../static/icons/ruler.svg"}>
            <div />
            <label>{offer.size}</label>
          </CardCategory>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center"
            }}
          >
            <CardCategory image={"../../../../static/images/geotag.svg"}>
              <div />
              <label>{offer.city}</label>
            </CardCategory>
            <CardCategory image={"../../../../static/images/clock.svg"}>
              <div />
              <label>{transformDate(offer.modified_date)}</label>
            </CardCategory>
          </div>
          <CardButton onClick={() => setOffer(offer)}>
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
