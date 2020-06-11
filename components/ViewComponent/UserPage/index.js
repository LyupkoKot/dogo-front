import React, {useState, useEffect} from 'react';
import {OfferStyled, OfferWrapper} from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import UserImage from "./components/UserImage";
import UserInfo from "./components/UserInfo";
import Description from "../../UIElements/Description";
import UserDescription from "./components/UserDescription";
import OfferCardSmall from "../OfferCardSmall";
import { useSelector } from 'react-redux'
import { parseJwt } from '../../../utils/functions'

const UserPage = () => {
    const userId = useSelector(state => state.userId);
    console.log(userId)
    const [user, setUser] = useState(null);

    useEffect(() => {

        // Insert API url below

            console.log(userId)
            const apiUrl = `http://192.168.1.246:3001/zpi/api/user/${parseJwt(userId)['_id']}`;
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
                    <OfferCardSmall/>
                </OfferStyled>
            </OfferWrapper>
    );
};

export default UserPage;
