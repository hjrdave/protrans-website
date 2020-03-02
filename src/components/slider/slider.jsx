import React, { useState } from "react"
import Carousel from "react-bootstrap/Carousel"
import SlideImage from "../../widgets/home-slider/slides/register"
import "./_slider.scss"

function Slider({ slides }) {
  //state
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  //handlers
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        {slides.map(item => {
          return (
            <Carousel.Item>
              <SlideImage name={item.image} />
              <Carousel.Caption className="d-flex align-items-center justify-content-center">
                <div>
                  <h3>{item.headline}</h3>
                  <p>{item.lede}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default Slider
