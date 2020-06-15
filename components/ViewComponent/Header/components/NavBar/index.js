import React, { useState } from 'react'
import NavItem from "./NavItem";
import { NavBarStyled } from './views'
import NavItemIcon from './NavItemIcon'
import { CookiesManagerContext } from '../../../../../contextProviders/cookiesManager'

const NavBar = () => {

  const userToken = React.useContext(CookiesManagerContext).cookiesManager.getToken('x-auth-token')

  const [active, setActive] = useState()

  return (
    <NavBarStyled>
      <NavItem
        isActive={active === 0}
        onClick={() => setActive(0)}
        title={"Glówna"}
        to={"/"}
      />
      <NavItem
        isActive={active === 1}
        onClick={() => setActive(1)}
        title={"Zakladki"}
        to={userToken ? "/favorites" : '/login'}
      />
      {userToken
        ? <NavItemIcon
          isActive={active === 2}
          onClick={() => setActive(2)}
          to={'/user/[id]'} as={`/user/me`}
        />
        : <NavItem
          isActive={active === 2}
          onClick={() => setActive(2)}
          title={"Logowanie"}
          to={"login"}
        />
      }
    </NavBarStyled>
  )
}


export default NavBar;
