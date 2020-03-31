import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function HomeForm() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group>
          <div className="mb-2">
            <Form.Check
              type={'checkbox'}
              label={`Damages`}
            />
          </div>
          <div className="mb-2">
            <Form.Check
              type={'checkbox'}
              label={`Transit Times`}
            />
          </div>
          <div className="mb-2">
            <Form.Check
              type={'checkbox'}
              label={`On-Time Delivery`}
            />
          </div>
          <div className="mb-2">
            <Form.Check
              type={'checkbox'}
              label={`Shipment Visibility`}
            />
          </div>
          <div className="mb-2">
            <Form.Check
              type={'checkbox'}
              label={`Total Shipping Cost`}
            />
          </div>
          <div className="mb-2">
            <Form.Check
              type={'checkbox'}
              label={`Total Shipping Spend`}
            />
          </div>
          <div className="mb-2">
            <Form.Check
              type={'checkbox'}
              label={`Unhappy with Current Provider`}
            />
          </div>
        </Form.Group>
        <div className='d-flex justify-content-center'>
          <Button variant="primary" type="submit">
            Submit
                </Button>
        </div>
      </Form>
    </>
  )
}