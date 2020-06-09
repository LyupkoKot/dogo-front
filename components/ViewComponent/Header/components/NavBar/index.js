import React from 'react';
import NavItem from "./NavItem";
import { NavBarStyled } from './views'
import cookies from 'next-cookies'
import NavItemIcon from './NavItemIcon'

const NavBar = ({ token }) => {
  return (
    <NavBarStyled>
      <NavItem title={"Glówna"} to={"/"}/>
      <NavItem title={"Zakladki"} to={"favourites"}/>
      {token !== null
        ? <NavItemIcon to={'user'}/>
        : <NavItem title={"Logowanie"} to={"login"}/>
      }
    </NavBarStyled>
  )
}

NavBar.getInitialProps = async (ctx) => {
  const token = cookies(ctx).token;
  return { token }
}


export default NavBar;
