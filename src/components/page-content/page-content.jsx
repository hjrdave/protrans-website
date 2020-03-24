import React from "react";
import './_page-content.scss';

function PageContent({ children, type }) {

  //handlers
  const handlePageContentType = (type) => {
    let typeInput = {
      'post': 'col-8',
      'full': 'col-12 col-lg-10'
    }
    if (type) {
      return typeInput[type];
    }
    return 'col-12 col-lg-8'
  }

  return (
    <>
      <div className={`page-content container-fluid pt-4 ${(type === 'post') ? 'page-content-shadow' : ''}`}>
        <div className="row d-flex justify-content-center">
          <div className={`${handlePageContentType(type)}`}>
            <>{children}</>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageContent
