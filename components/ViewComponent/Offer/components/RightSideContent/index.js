import React from 'react';
import {RightSideContentStyled} from "./view";
import OfferTitleCard from "../OfferTitleCard";
import OfferPhotoAlbum from "../OfferPhotoAlbum";

const RightSideContent = () => {
    return (
        <RightSideContentStyled>
            <OfferTitleCard/>
            {/*<OfferPhotoAlbum/>*/}
        </RightSideContentStyled>
    );
};

export default RightSideContent;
