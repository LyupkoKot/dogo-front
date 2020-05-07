import React from 'react'
import LogoSection from "./sections/LogoSection"
import { HeaderStyled, HeaderWrapper } from './views'
import AddOfferButton from './components/Buttons/AddOfferButton'
import NavBar from './components/NavBar'

const Header = () => {
    return (
        <HeaderStyled>
          <HeaderWrapper>
            <LogoSection/>
            <NavBar/>
            <AddOfferButton/>
          </HeaderWrapper>
        </HeaderStyled>
    );
};

export default Header;
