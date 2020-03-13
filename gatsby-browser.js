// gatsby-browser.js
import React from 'react';
import Layout from './src/components/layout';
import Treble from 'treble-gsm';
import Store from './src/Store';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Treble store={Store}>
        <Layout>
          {element}
        </Layout>
      </Treble>
    </>
  );
}

// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }