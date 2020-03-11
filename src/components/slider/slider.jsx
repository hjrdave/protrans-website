import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "../../images/register";
import Button from "react-bootstrap/Button";
import "./_slider.scss";
import uniqid from 'uniqid';

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
        interval={6000}
        fade={true}
        touch={true}
      >
        {slides.map(item => {
          return (
            <Carousel.Item key={uniqid()}>
              <Image name={item.image} />
              <Carousel.Caption className="d-flex align-items-center justify-content-start">
                <div>
                  <h1>{item.headline}</h1>
                  <p>{item.lede}</p>
                  {item.button ? (
                    <div className="text-left pt-4">
                      <Button variant="primary" className={"py-2 px-4"}>
                        {item.button}
                      </Button>
                    </div>
                  ) : null}
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
