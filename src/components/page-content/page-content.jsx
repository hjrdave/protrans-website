/*
  page-content.jsx
  Content container that controls how the content is rendered on mobile, desktop, posts, and fulllpages.
*/
import React from "react";

export default function PageContent({ children, type }) {

  //handlers
  const handlePageContentType = (type) => {
    let typeInput = {
      'post': 'col-12 col-lg-8',
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
