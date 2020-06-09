import React from 'react'
import { NavItemIconImage, NavItemIconStyled, NavItemIconText } from './views'
import Link from 'next/link'

const NavItemIcon = ({to}) => {
  return (
    <Link href={to}>
      <NavItemIconStyled>
        <NavItemIconText>
          {'Moje konto'}
        </NavItemIconText>
        <NavItemIconImage/>
      </NavItemIconStyled>
    </Link>
  )
}

export default NavItemIcon
