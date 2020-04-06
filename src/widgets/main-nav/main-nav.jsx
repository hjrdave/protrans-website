/*
  Main Navigation
  Each object is a navigation item.

  API Example:
  {
    path: string
    text: string
    subMenu: [
      {
        path: string,
        text: string
      }
    ]
  }

*/

import React from "react"
import Navigation from "../../components/navigation"

function MainNav({ type }) {
  return (
    <>
      <Navigation
        type={type}
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
            path: "/our-story",
            text: "Our Story",
          },
          {
            path: "/logistics-news",
            text: "Logistics News",
          },
          {
            path: "",
            text: "Contact",
            subMenu: [
              {
                path: "/locations",
                text: "Locations",
              },
              {
                path: "/careers",
                text: "Careers",
              },
              {
                path: "/customer-support",
                text: "Customer Support",
              },
              {
                path: "/talk-with-us",
                text: "Talk with Us",
              },
              {
                path: "/create-shipment",
                text: "Create Shipment",
              },
            ],
          },
        ]}
      />
    </>
  )
}

export default MainNav
