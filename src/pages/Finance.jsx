import React, { Fragment } from "react";
import { Row, Col, Form} from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import data from '../Utilities/data.json';
import {options, dataStyling } from '../Utilities/barConfig.js';
import '../styles/StaffDashboardOverview.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Finance = () => {
    return (
        <Fragment>
            <Row className="m-0 px-4 py-4">
                <div className="d-flex justify-content-between">
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
                <Col xs={12} md={6} className='d-flex flex-column gap-2'>
                <CustomCard pillColor={'#206AA2'} title={'Meal consumption'} value={12450}/>
                <CustomCard pillColor={'#C79960'} title={'Extra consumption'} value={12450}/>
                <CustomCard pillColor={'#6C63FF'} title={'Consumption days'} value={24}/>
                <CustomCard pillColor={'#3D8CD6'} title={'Total value'} value={24900}/>
                </Col>
            </Row>
            <Row className="m-4 p-4 chart align-items-center">
                <CustomCard pillColor={'#206AA2'} title={'Recent consumptions'}/>
                <Row className="borders m-0 h6 fw-bold py-2">
                <Col className="text-start">Month</Col>
                <Col className="text-center">Meal consumption</Col>
                <Col className="text-center">Extra consumption</Col>
                <Col className="text-center">Consumption days</Col>
                <Col className="text-center">Total value</Col>
                <Col></Col>
                </Row>
                {data.map((x, index) => {
                    return (
                    <Row className='py-2 m-0 h6 align-items-center' key={index}>
                        <Col>{x.month}</Col>
                        <Col>NGN {x.mealConsumption}</Col>
                        <Col>NGN {x.extraConsumption}</Col>
                        <Col>{x.consumptionDays}</Col>
                        <Col>NGN {x["Total value"]}</Col>
                        <button className="viewButton text-white rounded p-2">View</button>
                    </Row>
                    )
                })}
            </Row>
        </Fragment>
    )
}

export default Finance;