import React from "react";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';
import HomeSlider from '../widgets/home-slider';

function Home() {

  return (
    <>
      <PageContainer title={'Home'}>
        <HomeSlider />
        <PageContent>
          <h1>Home Page</h1>
        </PageContent>
      </PageContainer>
    </>
  )
}


export default Home
