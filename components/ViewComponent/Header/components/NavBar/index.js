import React from 'react';
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <div>
            <NavItem title={"kernes"} to={"index"}/>
            <NavItem title={"zelupa"} to={"index"}/>
            <NavItem title={"pacxrasha"} to={"index"}/>
        </div>
    );
};

export default NavBar;
