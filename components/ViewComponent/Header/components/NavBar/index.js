import React from 'react';
import NavItem from "./NavItem";
import { NavBarStyled } from './views'

const NavBar = () => {
    return (
        <NavBarStyled>
            <NavItem title={"Glowna"} to={"/"}/>
            <NavItem title={"O nas"} to={"about"}/>
            <NavItem title={"Zakladki"} to={"favorites"}/>
            <NavItem title={"Logowanie"} to={"login"}/>
        </NavBarStyled>
    );
};

export default NavBar;
