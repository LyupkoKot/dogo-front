import React from 'react';
import NavItem from "./NavItem";
import { NavBarStyled } from './views'
import NavItemIcon from './NavItemIcon'
import { useSelector } from 'react-redux'
import { parseJwt } from '../../../../../utils/functions'
import { CookiesManagerContext } from '../../../../../contextProviders/cookiesManager'

const NavBar = () => {

  const id = useSelector(state => state.userId)

  return (
    <NavBarStyled>
      <NavItem title={"Glówna"} to={"/"}/>
      <NavItem title={"Zakladki"} to={"/favourites"}/>
      {typeof window !== 'undefined' && localStorage.getItem('token') !== null
        ? <NavItemIcon to={'/user/[id]'} as={`/user/me`}/>
        : <NavItem title={"Logowanie"} to={"login"}/>
      }
    </NavBarStyled>
  )
}


export default NavBar;
