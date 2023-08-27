import React from 'react'
import { NavItemIconImage, NavItemIconStyled, NavItemIconText } from './views'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const NavItemIcon = ({to, as}) => {

  const id = useSelector(state => state.userId)

  return (
    <Link href={to} as={as}>
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
