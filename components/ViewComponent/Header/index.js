import React from "react"
import LogoSection from "./sections/LogoSection"
import { HeaderStyled, HeaderWrapper } from "./views"
import RightSection from "./sections/RightSection"
import Link from 'next/link'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <Link href={'/'}>
          <LogoSection />
        </Link>
        <RightSection />
      </HeaderStyled>
    </HeaderWrapper>
  )
}

export default Header
