import React from 'react';
import NavBar from "../../components/NavBar";
import AddOfferButton from "../../components/Buttons/AddOfferButton";
import {RightSectionStyled} from "./view";

const RightSection = () => {
    return (
        <RightSectionStyled>
            <NavBar/>
            <AddOfferButton/>
        </RightSectionStyled>
    );
};

export default RightSection;
