/*
  Main Navigation
  Notes: Each object is a navigation item.  Path is the link and text is the menu item name.
*/

import React from "react"
import Navigation from "../../components/navigation"

function MainNav() {
  return (
    <>
      <Navigation
        navItems={[
          {
            path: "/solutions",
            text: "Solutions",
          },
          {
            path: "/technology",
            text: "Technology",
          },
          {
            path: "/carriers",
            text: "Carriers",
          },
          {
            path: "/blog",
            text: "Logistics New/Trends",
          },
          {
            path: "/contact",
            text: "Contact",
          }
        ]}
      />
    </>
  )
}

export default MainNav
