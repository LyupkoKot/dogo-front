import React from 'react'
import LogoSection from "./sections/LogoSection"
import HeaderStyled from './views'
import AddOfferButton from './components/Buttons/AddOfferButton'
import NavBar from './components/NavBar'

const Header = () => {
    return (
        <HeaderStyled>
            <LogoSection/>
            <NavBar/>
            <AddOfferButton/>
        </HeaderStyled>
    );
};

export default Header;
