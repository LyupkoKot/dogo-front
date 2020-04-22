import React from 'react';
import Link from 'next/link'
const NavItem = ({title, to}) => {
    return (
        <Link href={to}>
            <div>
                {title}
            </div>
        </Link>
    );
};

export default NavItem;
