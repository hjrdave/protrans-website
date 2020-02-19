import React from 'react';
import Slider from '../../components/slider';

function HomeSlider() {

  return (
    <>
      <Slider
        slides={[

          //slide 1
          {
            image: 'slide1',
            headline: 'Slide 1',
            lede: 'Foo Foo Foo'
          },

          //slide 2
          {
            image: 'slide2',
            headline: 'Slide 2',
            lede: 'Foo Foo Foo'
          },

          //slide 3
          {
            image: 'slide3',
            headline: 'Slide 3',
            lede: 'Foo Foo Foo'
          }
        ]}
      />
    </>
  )
}

export default HomeSlider;
