import React from "react";
import { Link } from "gatsby";
import PageContainer from '../components/page-container';
import PageContent from '../components/page-content';


const SolutionsPage = () => (
  <>
    <PageContainer title={'Solutions'}>
      <PageContent>
        <h1>Hi from the Solutions page</h1>
        <p>Welcome to foo page</p>
        <Link to="/">Go back to the homepage</Link>
      </PageContent>
    </PageContainer>
  </>
)

export default SolutionsPage
