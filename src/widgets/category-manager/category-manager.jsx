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