import React from "react";
import Link from "next/link";
import NavItemStyled from "./views";

const NavItem = ({ title, to, isActive, onClick }) => {
  return (
    <Link href={to}>
      <NavItemStyled color={isActive && "#FF7C30"} onClick={onClick}>
        <div>{title}</div>
      </NavItemStyled>
    </Link>
  );
};

export default NavItem;
