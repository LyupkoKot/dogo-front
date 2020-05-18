import React from "react";
import LogoSection from "./sections/LogoSection";
import { HeaderStyled, HeaderWrapper } from "./views";
import AddOfferButton from "./components/Buttons/AddOfferButton";
import NavBar from "./components/NavBar";
import RightSection from "./sections/RightSection";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <LogoSection />
        <RightSection />
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default Header;
