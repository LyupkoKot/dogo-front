import React from 'react';
import NavItem from "./NavItem";
import { NavBarStyled } from './views'

const NavBar = () => {
    return (
        <NavBarStyled>
            <NavItem title={"Glówna"} to={"index"}/>
            <NavItem title={"O nas"} to={"index"}/>
            <NavItem title={"Zakladki"} to={"index"}/>
            <NavItem title={"Logowanie"} to={"login"}/>
        </NavBarStyled>
    );
};

export default NavBar;
