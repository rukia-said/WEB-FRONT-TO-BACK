import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from 'react-bootstrap';

const Patient = () => {
  return (
    <>

      <h2 className='text-center text-primary'>PATIENT SECTION</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter LastName" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter age" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Occupation</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose Occupation...</option>
              <option>Staff</option>
              <option>Student</option>
            </Form.Select>
          </Form.Group>


          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type of Diseases</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose Diseases...</option>
              <option>Malaria</option>
              <option>Ulcers</option>
              <option>Flu</option>
              <option>Fever</option>
              <option>Headache</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  )
}

export default Patient;