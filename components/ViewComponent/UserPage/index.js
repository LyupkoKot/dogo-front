import React, {useState, useEffect} from 'react';
import {OfferStyled, OfferWrapper} from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import UserImage from "./components/UserImage";
import UserInfo from "./components/UserInfo";
import Description from "../../UIElements/Description";
import UserDescription from "./components/UserDescription";
import OfferCardSmall from "../OfferCardSmall";

const UserPage = () => {
    const [userState, setUserState] = useState({
        loading: false,
        user: null,
    });

    useEffect(() => {
        setUserState({ loading: true });
        // Insert API url below
        const apiUrl = ``;
        fetch(apiUrl)
            .then(res => res.json())
            .then(response => {
                setUserState({ loading: false, user: response.body });
            })
            .catch(error => console.log(error));
    }, [setUserState]);
    return (
            !userState.loading&&<OfferWrapper>
                <OfferStyled>
                    <TopSection image={<UserImage user={userState.user}/>} rightSideContent={<UserInfo user={userState.user}/>}/>
                    <Description title={"Info"} content={<UserDescription user={userState.user}/>}/>
                    <OfferCardSmall/>
                </OfferStyled>
            </OfferWrapper>
    );
};

export default UserPage;
