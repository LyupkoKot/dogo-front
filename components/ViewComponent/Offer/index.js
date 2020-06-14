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
    // Insert API url below
    console.log(userId);
    const apiUrl = `http://77.55.221.84:3102/zpi/api/user/${offer.publisher_id}`;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-auth-token": userId
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setUser(response);
      })
      .catch(error => console.log(error));
  }, []);
  console.log(user);

  return (
    <OfferWrapper>
      <OfferStyled>
        <TopSection
          image={<OfferImage />}
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
      </OfferStyled>
    </OfferWrapper>
  );
};

export default Offer;
