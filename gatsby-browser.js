// gatsby-browser.js
import React from 'react';
import MainLayout from './src/layouts/main-layout';
import Treble from 'treble-gsm';
import Store from './src/Store';
import CategoryManager from './src/widgets/category-manager';
import DarkMode from './src/components/dark-mode';

export const wrapRootElement = ({ element }) => {

  return (
    <>
      <Treble store={Store}>

        {/* when auto is set to true it detects if dark mode is set in OS */}
        <DarkMode auto={false} />

        {/* Add categories to global state on load */}
        <CategoryManager />

        <MainLayout>
          {element}
        </MainLayout>
      </Treble>
    </>
  );
}
