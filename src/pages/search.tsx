import React from "react";
import { Link } from "gatsby";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';


const SearchPage = () => (

  <>
    <PageContainer title={'Search'}>
      <PageContent>
        <h1>Hi from the Search page</h1>
        <p>Welcome to page</p>
        <Link to="/">Go back to the homepage</Link>
      </PageContent>
    </PageContainer>
  </>
)

export default SearchPage
