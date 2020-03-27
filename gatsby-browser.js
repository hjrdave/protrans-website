// gatsby-browser.js
import React from 'react';
import MainLayout from './src/layouts/main-layout';
import Treble from 'treble-gsm';
import Store from './src/Store';
import CategoryManager from './src/widgets/category-manager';

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <Treble store={Store}>
        {/* Add categories to global state on load */}
        <CategoryManager />
        <MainLayout>
          {element}
        </MainLayout>
      </Treble>
    </>
  );
}
