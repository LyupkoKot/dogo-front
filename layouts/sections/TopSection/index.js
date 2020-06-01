import React from 'react';
import {OfferImageStyled} from "../../../components/ViewComponent/Offer/components/OfferImage/view";
import {TopSectionStyled} from "./view";
import OfferTitleCard from "../../../components/ViewComponent/Offer/components/OfferTitleCard";
import RightSideContent from "../../../components/ViewComponent/Offer/components/RightSideContent";
import OfferImage from "../../../components/ViewComponent/Offer/components/OfferImage";
import {RightSideContentStyled} from "../../../components/ViewComponent/Offer/components/RightSideContent/view";

const TopSection = ({image, rightSideContent}) => {
    return (
        <TopSectionStyled>
            {image}
            <RightSideContentStyled>
            {rightSideContent}
            </RightSideContentStyled>
        </TopSectionStyled>
    );
};

export default TopSection;
