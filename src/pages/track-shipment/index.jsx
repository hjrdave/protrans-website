import React from "react";
import { Link } from 'gatsby';
import SEO from '../../components/seo';
import { Form, Button } from 'react-bootstrap';
import DataGrid from '../../components/data-grid';
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
          <DataGrid
            columns={[
              { name: 'Track', dataField: 'track' },
              { name: 'Origin', dataField: 'origin' },
              { name: 'Destination', dataField: 'destination' },
              { name: 'Scheduled Pickup', dataField: 'scheduledPickup' },
              { name: 'Estimated Delivery', dataField: 'estimatedDelivery' },
              { name: 'Delivery Pro', dataField: 'deliveryPro' },
              { name: 'Carrier Pro', dataField: 'carrierPro' },
              { name: 'Qty', dataField: 'quanity' },
              { name: 'Wt', dataFields: 'weight' },
              { name: 'Status', dataFields: 'status' },
              { name: 'Last Known Location', dataFields: 'lastKnownLocation' }
            ]}
            rowData={[
              {
                track: <Link to='/'>S8778331</Link>,
                origin: 'Kiekert de Mexico SA de CV 19864010 Amozoc, PB 72990, MEX',
                destination: 'BMW Manufacturing Co., LLC LC05 Warehouse 13216524 Greer, SC 29651, USA',
                scheduledPickup: '03/17/2020 19:00 - 20:30 CST',
                estimatedDelivery: '03/24/2020 00:01 - 23:59 EST',
                deliveryPro: '',
                carrierPro: '',
                quanity: '27 Pallets',
                weight: '15928 lbs',
                status: 'Confirmed at Logistik',
                lastKnownLocation: 'San Roberto, NL 67855, MEX'
              }
            ]}
          />
        </PageContent>
      </PageContainer>
    </>
  )
}

