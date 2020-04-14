import React from "react";
import SEO from '../../components/seo';
import { Form, Button, Col } from 'react-bootstrap';
import PageBanner from '../../components/page-banner';
import PageContainer from "../../components/page-container";
import PageContent from "../../components/page-content";
import "./_styles.scss";

export default function Page({ location }) {

  return (
    <>
      <SEO title="Track Shipment" />
      <PageContainer id='track-shipment-page' activePath={location}>
        {/* <PageBanner
          title={'Track Shipment'}
        //cta={'Get an Analysis'}
        /> */}
        <PageContent>
          <h1>Track Shipment</h1>
          <Form className='pt-4'>
            <Form.Row>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tracking Numbers</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form.Row>
            <div className='d-flex justify-content-end mb-4 mt-2'>
              <Button variant="primary" type="submit">
                Track Shipments
              </Button>
            </div>
          </Form>
        </PageContent>
      </PageContainer>
    </>
  )
}

