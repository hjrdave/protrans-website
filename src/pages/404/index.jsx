import React from "react";
import PageContainer from '../../components/page-container';
import PageContent from '../../components/page-content';
import SEO from "../../components/seo";
import PageNotFoundGraphic from '../../assets/GraphicPageNotFound';
import "./_styles.scss";

export default function Page({ location }) {
  return (
    <>
      <SEO title="404: Not found" />
      <PageContainer id='404-page' activePath={location}>
        <PageContent>
          <div className="row d-flex justify-content-center align-items-center py-4 my-4">
            <div className="col-8 d-flex justify-content-center">
              <PageNotFoundGraphic />
            </div>
            <div className="col-12 d-flex justify-content-center pt-4">
              <small style={{ fontSize: '.2rem', opacity: '.3' }}><a href="https://www.freepik.com/free-photos-vectors/background" target='_blank' rel='noopener noreferrer'>Background vector created by freepik - www.freepik.com</a></small>
            </div>
          </div>
        </PageContent>
      </PageContainer>
    </>
  )
}
