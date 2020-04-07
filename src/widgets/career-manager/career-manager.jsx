/*
  career-manager.jsx
  This widget is for managing job posts on the career page.

  API Example: 
  {
    date: //post date
    position: //position name
    location: //location of position
    summary: //a short summary of the job posting
    path: //application urltemporarly: true | false
  }

*/

import React from 'react';
import CareerList from '../../components/career-list';

export default function CareerManager() {

  return (
    <>
      <CareerList
        careerItems={[
          {
            date: '05/04/2020',
            position: 'Material Handler',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id feugiat elit, et tincidunt massa. Ut a gravida turpis, at scelerisque lectus. Aliquam a nisi id nisi vehicula gravida nec nec quam. Maecenas blandit ornare ante non blandit. Duis quis augue vel ante posuere hendrerit.',
            location: 'Animal Crossing, Alaska',
            path: '/'
          },
          {
            date: '05/03/2020',
            position: 'Turnip Seller',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id feugiat elit, et tincidunt massa. Ut a gravida turpis, at scelerisque lectus.',
            location: 'Animal Crossing, Alaska',
            path: '/'
          }
        ]}
      />
    </>
  )
}