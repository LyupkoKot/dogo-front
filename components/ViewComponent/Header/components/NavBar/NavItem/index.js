import React from 'react';
import Link from 'next/link'
import NavItemStyled from './views'

const NavItem = ({title, to}) => {
    return (
      <NavItemStyled>
        <Link href={to}>
            <div>
                {title}
            </div>
        </Link>
      </NavItemStyled>
    );
};

export default NavItem;
