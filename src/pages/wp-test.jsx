import React, { useState, useEffect } from "react";
import useFetch from 'use-http';
import PageContainer from "../components/page-container";
import PageContent from "../components/page-content";
import uniqid from 'uniqid';
import "./_styles.scss";

export default function Page({ location, data }) {

  const [posts, setPost] = useState();
  const options = { // accepts all `fetch` options
    data: []        // default for `data` will be an array instead of undefined
  }
  const Foo = useFetch('http://play.mediafish.io/wordpress/wp-json/better-rest-endpoints/v1/posts', options, []); // onMount (GET by default)

  useEffect(() => {
    console.log(location);
  }, [])
  return (
    <>
      <PageContainer activePath={location}>
        {/* <PageBanner
          title={'Track Shipment'}
        //cta={'Get an Analysis'}
        /> */}
        <PageContent>
          {

            Foo.data.map(({ title, excerpt, content }) => {
              return (
                <React.Fragment key={uniqid()}>
                  <p>{title}</p>
                  {content}
                </React.Fragment>
              )

            })
          }
        </PageContent>
      </PageContainer>
    </>
  )
}


