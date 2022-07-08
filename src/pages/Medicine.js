import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from 'react-bootstrap';



const Medicine = () => {
  return (
    <div>
      <h1 className=" text-center text-danger">Medicine Section</h1>
      <>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Drug's Name</Form.Label>
              <Form.Control type="text" placeholder="Enter a drug name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label>Injection Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter injection" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label>Expire date</Form.Label>
              <Form.Control type="date" placeholder="Enter expire date" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3 col-4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Total Drugs</Form.Label>
              <Form.Control type="number" placeholder="Enter total drugs" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Save
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="success" type="submit">
            Back
          </Button>
        </Form>

      </>

    </div >
  );
}

export default Medicine;