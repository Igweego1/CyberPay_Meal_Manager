import React, { Fragment } from "react";
import { Row, Col, Form, Card, Stack } from "react-bootstrap";
import data from '../Utilities/data.json';
import '../styles/Consumptions.css';

const Consumptions = () => {
  return (
    <Fragment>
      <Row className="m-0 p-4">
        <div className="d-flex justify-content-between">
          <div>
            <h2>Consumptions</h2>
            <h6 className="text-secondary">Details of your consumptions this month</h6>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Form.Select className="w-50">
              {data.map((x, index) => {
                return <option key={index}>{x.month} 2022</option>
              })}
            </Form.Select>
            <button className="mainButton border-0 rounded text-white p-2 h6 mb-0">Download Report</button>
          </div>
        </div>
      </Row>
      <Row className="m-0 p-4 w-100">
        <Col xs={4} className='d-flex flex-column gap-3'>
          <Card className="cards w-100 h-50 p-3 d-flex flex-column gap-2">
            <Card.Subtitle>Consumption Month</Card.Subtitle>
            <Card.Title className="fw-bold">January</Card.Title>
          </Card>
          <Card className="cards w-100 h-50 p-3 d-flex flex-column gap-2">
            <Card.Subtitle>Meal consumption</Card.Subtitle>
            <Card.Title className="fw-bold">20,500</Card.Title>
          </Card>
        </Col>
        <Col xs={4} className='d-flex flex-column gap-3'>
          <Card className="cards w-100 h-50 p-3 d-flex flex-column gap-2">
            <Card.Subtitle>Total Working Days</Card.Subtitle>
            <Card.Title className="fw-bold">20</Card.Title>
          </Card>
          <Card className="cards w-100 h-50 p-3 d-flex flex-column gap-2">
            <Card.Subtitle>Extra consumption</Card.Subtitle>
            <Card.Title className="fw-bold">3,000</Card.Title>
          </Card>
        </Col>
        <Col xs={4}>
          <Card className="cards w-100 h-100 p-3 d-flex flex-column gap-2">
            <Card.Subtitle>Consumption Days</Card.Subtitle>
            <Card.Title className="fw-bold">18</Card.Title>
            <hr/>
            <Stack direction="vertical">
              <div className="d-flex justify-content-between">
                <h6 className="h6">Week 1</h6>
                <h6 className="h6">5</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="h6">Week 2</h6>
                <h6 className="h6">4</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="h6">Week 3</h6>
                <h6 className="h6">-</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="h6">Week 4</h6>
                <h6 className="h6">4</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="h6">Week 5</h6>
                <h6 className="h6">5</h6>
              </div>
            </Stack>
          </Card>
        </Col>
      </Row>
      <Row className="m-0 nextRow w-100">
        <Card className="cards p-3 d-flex flex-column gap-2">
          <Stack direction='vertical' gap={3}>
            <div className="d-flex justify-content-between">
              <Card.Subtitle>Total amount</Card.Subtitle>
              <Card.Title className="fw-bold">3,000</Card.Title>
            </div>
            <div className="d-flex justify-content-between">
              <Card.Subtitle>Deduction amount</Card.Subtitle>
              <Card.Title className="fw-bold">3,000</Card.Title>
            </div>
          </Stack>
        </Card>
      </Row>
    </Fragment>
  )
};

export default Consumptions;
