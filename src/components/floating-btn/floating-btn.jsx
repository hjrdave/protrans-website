import React from 'react';
import './_floating-btn.scss';
import './_floating-btn-dark.scss';

export default function FloatingBtn({ icon }) {

  return (
    <>
      <div className='floating-btn rounded-circle d-flex justify-content-center align-items-center'>
        {icon}
      </div>
    </>
  )
}