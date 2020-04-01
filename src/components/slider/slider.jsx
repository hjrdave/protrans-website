import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "../../images/register";
import Button from "react-bootstrap/Button";
import "./_slider.scss";
import './_slider-dark-mode.scss';
import uniqid from 'uniqid';

export default function Slider({ slides }) {
  //state
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  //handlers
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  //apply text animations on render
  // useEffect(() => {
  //   setTextAnimate(true);
  //   //console.log('foo slide')
  // }, []);

  return (
    <>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        interval={5000}
        fade={true}
        touch={true}
      >
        {slides.map(item => {
          return (
            <Carousel.Item key={uniqid()}>
              <Image name={item.image} />
              <Carousel.Caption className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <div>
                  <h1 className={`slider-heading-1`}>{item.headline}</h1>
                  <p className='slider-lede'>{item.lede}</p>
                  {item.button ? (
                    <div className="text-center text-lg-left pt-4">
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

