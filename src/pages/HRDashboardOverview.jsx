import React, { Fragment } from "react";
import { Row, Col, Form, Table } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import data from '../Utilities/data.json';
import {options, dataStyling } from '../Utilities/barConfig.js';
import '../App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HRDashboardOverview = () => {
  return (
    <Fragment>
      <Row className="m-0 px-4 py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h2>Overview</h2>
            <h6 className="text-secondary">Meal Orders Breakdown</h6>
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
      <Row className="m-0 px-4 firstRow h-auto">
        <Col xs={12} md={6} className="chart p-3">
          <Bar options={options} data={dataStyling} />
        </Col>
        <Col xs={12} md={6} className='d-flex flex-column gap-2 px-0 px-md-2'>
          <CustomCard pillColor={'#206AA2'} title={'Meal consumption'} value={12450}/>
          <CustomCard pillColor={'#C79960'} title={'Extra consumption'} value={12450}/>
          <CustomCard pillColor={'#6C63FF'} title={'Consumption days'} value={24}/>
          <CustomCard pillColor={'#3D8CD6'} title={'Total value'} value={24900}/>
        </Col>
      </Row>
      <Row className="m-4 p-4 chart align-items-center">
        <CustomCard pillColor={'#206AA2'} title={'Recent consumptions'}/>
        <Table responsive borderless>
          <thead className="borders m-0 h6 fw-bold">
            <th className="text-start py-2">Month</th>
            <th className="text-start py-2">Meal consumption</th>
            <th className="text-start py-2">Extra consumption</th>
            <th className="text-start py-2">Consumption days</th>
            <th className="text-start py-2">Total value</th>
            <th></th>
          </thead>
          <tbody>
            {data.map((x, index) => {
              return (
                <tr className='py-2 m-0 h6 align-items-center' key={index}>
                  <td>{x.month}</td>
                  <td>NGN {x.mealConsumption}</td>
                  <td>NGN {x.extraConsumption}</td>
                  <td>{x.consumptionDays}</td>
                  <td>NGN {x["Total value"]}</td>
                  <td><button className="viewButton text-white rounded p-2">View</button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Row>
    </Fragment>
    
  );
};

export default HRDashboardOverview;
