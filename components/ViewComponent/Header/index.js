import React from "react"
import LogoSection from "./sections/LogoSection"
import { HeaderStyled, HeaderWrapper } from "./views"
import RightSection from "./sections/RightSection"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <a href={'/'}>
          <LogoSection />
        </a>
        <RightSection />
      </HeaderStyled>
    </HeaderWrapper>
  )
}

export default Header
