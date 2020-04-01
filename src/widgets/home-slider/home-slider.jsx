/*
  Home Slider
  
  Each object is a slide.  The first object is the default slide.
  Must register image before use.  The image property takes the name of the 
  registred image.

  API Example:
  {
    image: string, //name of registred image
    headline: string or JSX,
    lede: string,
    button: string //button text
  }

*/

import React from "react"
import Slider from "../../components/slider"
import "./_home-slider.scss"

function HomeSlider() {
  return (
    <>
      <div id="home-slider">
        <Slider
          slides={[
            //slide 1
            {
              image: "slide1",
              headline: "Anyone Can Cut Costs …But WE REDUCE SPEND",
              lede: "Find out how we do it!",
              button: "Get Started",
            },

            //slide 2
            {
              image: "slideShipment",
              headline: "Track Shipments",
              button: "Track Shipment",
            },

            //slide 3
            {
              image: "slide3",
              headline: "Life of Poor Paul",
              lede:
                "Poor Paul Didn't do His Research on Logistics Planning for His Company...",
              button: "Read More",
            }

          ]}
        />
      </div>
    </>
  )
}

export default HomeSlider
