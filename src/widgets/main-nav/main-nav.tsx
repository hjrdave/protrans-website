/*
  Main Navigation
  Notes: Each object is a navigation item.  Path is the link and text is the menu item name.
*/

import React from 'react';
import Navigation from '../../components/navigation';

function MainNav() {

  return (
    <>
      <Navigation
        navItems={[
          {
            path: '/technology',
            text: 'Technology'
          },
          {
            path: '/carriers',
            text: 'Carriers'
          },
          {
            path: '/blog',
            text: 'Blog'
          },
          {
            path: '/about-us',
            text: 'About Us'
          },
          {
            path: '/contact',
            text: 'Contact'
          },
          {
            path: '/search',
            text: 'Search'
          },
        ]}
      />
    </>
  )
}

export default MainNav;
