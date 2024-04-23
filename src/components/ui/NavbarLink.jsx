import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? 'active-link' : ''}`}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
