/*
  nav-item.jsx
  Normal navigation nav item.
*/

import React from "react";
import { Link } from "gatsby";
import { useTreble } from 'treble-gsm';

export default function NavItem({ item }) {

  const [{ activeNavPath }] = useTreble();

  return (
    <>
      <Link to={item.path} className={`nav-link d-flex align-items-center nav-item ${(activeNavPath === (item.path + '/')) ? 'nav-active-state' : ''}`}>
        {item.text}
      </Link>
    </>
  )
}
