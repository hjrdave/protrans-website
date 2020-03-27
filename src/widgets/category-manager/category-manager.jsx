/*
  category-manager.jsx
  Categories that are placed here are put into the global state 
  and can be accessed by the entire SPA App.

  API Example: 
  {
    name: string or JSX //name that will be rendered on screen
    slug: string //slug that will be shown in url
  }

*/

import React from 'react';
import Categories from '../../components/categories';

export default function CategoryManager() {

  return (
    <>
      <Categories
        catItems={[
          {
            name: <>Lean Management<br />&amp; Six Sigma</>,
            slug: 'Lean Management'
          },
          {
            name: 'Trucking',
            slug: 'Trucking'
          },
          {
            name: 'Logistics Technology',
            slug: 'Logistics Technology'
          },
          {
            name: 'Regulation',
            slug: 'Regulation'
          },
          {
            name: 'Sustainability',
            slug: 'Sustainability'
          }
        ]}
      />
    </>
  )
}