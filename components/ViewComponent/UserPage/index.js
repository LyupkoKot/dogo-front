import React, {useState, useEffect} from 'react';
import {OfferStyled, OfferWrapper} from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import UserImage from "./components/UserImage";
import UserInfo from "./components/UserInfo";
import Description from "../../UIElements/Description";
import UserDescription from "./components/UserDescription";
import OfferCardSmall from "../OfferCardSmall";
import { CookiesManagerContext } from '../../../contextProviders/cookiesManager'
import { parseJwt } from '../../../utils/functions'

const UserPage = () => {
  const cookies = React.useContext(CookiesManagerContext)
  const userId = cookies.cookiesManager.getToken('x-auth-token')
    console.log(userId, 12)
    const [user, setUser] = useState(null);

  useEffect(() => {
        // Insert API url below
            console.log(userId)
            const apiUrl = `http://77.55.221.84:3102/zpi/api/user/me`
            fetch(apiUrl, {
              method: 'GET',
              headers: {
                'x-auth-token': userId
              }
            })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setUser(response);
            })
            .catch(error => console.log(error));

    }, []);
  console.log(user)

  return (
    user !== null &&<OfferWrapper>
                <OfferStyled>
                    <TopSection image={<UserImage user={user}/>} rightSideContent={<UserInfo user={user}/>}/>
                    <Description title={"Info"} content={<UserDescription user={user}/>}/>
                </OfferStyled>
            </OfferWrapper>
    );
};

export default UserPage;
