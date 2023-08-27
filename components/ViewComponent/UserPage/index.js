import React, { useState, useEffect, useContext } from "react";
import { OfferStyled, OfferWrapper } from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import UserImage from "./components/UserImage";
import UserInfo from "./components/UserInfo";
import Description from "../../UIElements/Description";
import UserDescription from "./components/UserDescription";
import { UserContext } from "../../../contextProviders/UserContextProvider";
import { OfferList } from "./view";
import OfferCardSmall from "../OfferCardSmall";
import { CookiesManagerContext } from "../../../contextProviders/cookiesManager";
import { parseJwt } from "../../../utils/functions";
import { useRouter } from "next/router";
import MainButton from '../../UIElements/Buttons/MainButton'

const UserPage = ({ setOffer }) => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const cookies = React.useContext(CookiesManagerContext);
  const userId = cookies.cookiesManager.getToken("x-auth-token");
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const apiUrl = `http://77.55.221.84:3102/zpi/api/advertisement`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(response => {
        const offersFiltered = response.filter(
          e => e.publisher_id === parseJwt(userId)._id
        );
        setOffers(offersFiltered.filter(e => e.is_active === true));
      })
      .catch(error => console.log(error));
  }, []);
  const handleCLick = offer => {
    setOffer(offer);
    router.push("/offer/[id]", `/offer/${offer.id}`);
  };

  const handleLogout = () => {
    cookies.cookiesManager.removeToken()
    router.push('/')
  }

  return (
    <OfferWrapper>
      {user && (
        <OfferStyled>
          <TopSection
            image={<UserImage user={user} />}
            rightSideContent={<UserInfo user={user} />}
          />
          <Description
            title={"Info"}
            content={<UserDescription user={user} />}
          />

          {offers && (
            <OfferList>
              {offers.map((item, key) => (
                  <OfferCardSmall
                    offer={item}
                    key={key}
                    handleClick={handleCLick}
                  />
              ))}
            </OfferList>
          )}
          <MainButton label={'Log out'} onClick={handleLogout}/>
        </OfferStyled>
      )}
    </OfferWrapper>
  );
};

export default UserPage;
