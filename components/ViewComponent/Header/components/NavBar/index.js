import React from 'react';
import NavItem from "./NavItem";
import { NavBarStyled } from './views'

const NavBar = () => {
    return (
        <NavBarStyled>
            <NavItem title={"Glowna"} to={"index"}/>
            <NavItem title={"O nas"} to={"index"}/>
            <NavItem title={"Zakladki"} to={"index"}/>
            <NavItem title={"Logowanie"} to={"index"}/>
        </NavBarStyled>
    );
};

export default NavBar;
