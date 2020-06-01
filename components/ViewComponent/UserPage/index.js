import React from 'react';
import {OfferStyled, OfferWrapper} from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import OfferDescription from "../Offer/components/OfferDescription";
import OfferImportant from "../Offer/components/OfferImportant";
import UserImage from "./components/UserImage";
import UserInfo from "./components/UserInfo";
import Description from "../../UIElements/Description";
import UserDescription from "./components/UserDescription";
import OfferCardSmall from "../OfferCardSmall";

const UserPage = () => {
    return (
            <OfferWrapper>
                <OfferStyled>
                    <TopSection image={<UserImage/>} rightSideContent={<UserInfo/>}/>
                    <Description title={"Info"} content={<UserDescription/>}/>
                    <OfferCardSmall/>
                </OfferStyled>
            </OfferWrapper>
    );
};

export default UserPage;
