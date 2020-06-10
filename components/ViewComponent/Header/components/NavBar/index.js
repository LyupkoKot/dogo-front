import React from 'react';
import NavItem from "./NavItem";
import { NavBarStyled } from './views'
import NavItemIcon from './NavItemIcon'

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavItem title={"Glówna"} to={"/"}/>
      <NavItem title={"Zakladki"} to={"favourites"}/>
      {typeof window !== 'undefined' && localStorage.getItem('token') !== null
        ? <NavItemIcon to={'user'}/>
        : <NavItem title={"Logowanie"} to={"login"}/>
      }
    </NavBarStyled>
  )
}


export default NavBar;
