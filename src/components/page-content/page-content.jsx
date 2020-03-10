import React from "react";
import './_page-content.scss';

function PageContent({ children, type }) {
  return (
    <>
      <div className={`page-content container-fluid pt-4 ${(type === 'post') ? 'page-content-shadow' : ''}`}>
        <div className="row d-flex justify-content-center">
          <div className={`${(type === 'post') ? 'col-6' : 'col-8'}`}>
            <>{children}</>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageContent
