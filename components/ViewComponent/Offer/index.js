import React, { useEffect, useState } from "react";
import { OfferStyled, OfferWrapper } from "./view";
import TopSection from "../../../layouts/sections/TopSection";
import OfferDescription from "./components/OfferDescription";
import OfferHealth from "./components/OfferHealth";
import OfferImage from "./components/OfferImage";
import OfferTitleCard from "./components/OfferTitleCard";
import Description from "../../UIElements/Description";
import OfferOwner from "./components/OfferOwner";
import { CookiesManagerContext } from "../../../contextProviders/cookiesManager";

const Offer = ({ offer }) => {
  const cookies = React.useContext(CookiesManagerContext);
  const userId = cookies.cookiesManager.getToken("x-auth-token");
  const [user, setUser] = useState(null);
  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user/${offer.publisher_id}`;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-auth-token": userId
      }
    })
      .then(res => res.json())
      .then(response => {
        setUser(response);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <OfferWrapper>
      {offer&&(<OfferStyled>

        <TopSection
          image={<OfferImage offer={offer}/>}
          rightSideContent={<OfferTitleCard offer={offer} />}
        />
        <Description
          title={"Opis"}
          content={<OfferDescription offer={offer} />}
        />
        <Description
          title={"Zdrowie"}
          content={<OfferHealth offer={offer} />}
        />
        <Description title={"Właściciel"} content={<OfferOwner user={user}/>} />
      </OfferStyled>)}
    </OfferWrapper>
  );
};

export default Offer;
