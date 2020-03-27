
/*
  navigation.jsx
  Generic navigation for website.
*/

import React, { useEffect } from "react";
import MobileMenu from './mobile-menu';
import { useTreble, updateStore } from 'treble-gsm';
import "./_navigation.scss";
import "./_navigation-dark-mode.scss";
import DesktopMenu from "./desktop-menu";

export default function Navigation({ navItems, type }) {

  const [{ activeNavPath }, dispatch] = useTreble();

  //if page changes mobilenav will be closed
  useEffect(() => {
    updateStore('updateMobileNavState', false, dispatch);
  }, [activeNavPath])

  return (
    <>
      {/** Desktop Menu */}
      {
        (type !== 'mobile') ?
          <DesktopMenu navItems={navItems} /> : null
      }

      {/*Mobile Menu*/}
      {
        (type === 'mobile') ?
          <MobileMenu navItems={navItems} /> : null
      }
    </>
  )
}
