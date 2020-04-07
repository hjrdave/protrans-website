import React, { Fragment } from 'react';
import InfoCard from '../info-card';
import { Button } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function CareerList({ careerItems }) {
  // React.useEffect(() => {
  //   console.log(careerItems.careerItems);
  // }, [])
  return (
    <>
      {
        careerItems.map((item) => {
          return (
            <Fragment key={uniqid()}>
              <div className='pt-3'>
                <InfoCard>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-0'><small>Posted: {item.date}</small></p>
                    <p className=''><small>Location: {item.location}</small></p>
                  </div>
                  <p className='h4'>{item.position}</p>
                  <p>{item.summary}</p>
                  <div className='d-flex justify-content-end'>
                    <a href={item.path} target='_blank'><Button>Apply Now</Button></a>
                  </div>
                </InfoCard>
              </div>
            </Fragment>
          )
        })
      }
    </>
  )
}