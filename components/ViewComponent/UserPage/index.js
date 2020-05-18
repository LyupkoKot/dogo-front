import React from 'react';
import {OfferStyled, OfferWrapper} from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import OfferDescription from "../Offer/components/OfferDescription";
import OfferImportant from "../Offer/components/OfferImportant";
import UserImage from "./components/UserImage";

const UserPage = () => {
    return (
            <OfferWrapper>
                <OfferStyled>
                    <TopSection image={<UserImage/>}/>
                </OfferStyled>
            </OfferWrapper>
    );
};

export default UserPage;
