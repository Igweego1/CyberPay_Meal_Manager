import React, {Fragment} from "react";
import { Row, Form, Button } from "react-bootstrap";
import { CgSearch } from 'react-icons/cg';
import { IoFilter } from 'react-icons/io5';
import '../styles/DashboardLayout.css';

const HRStaffDashboard = () => {
  return (
    <Fragment>
      <Row className="m-0 px-4 py-4">
        <div className="d-flex justify-content-between">
          <div>
            <h2>Staff</h2>
            <h6 className="text-secondary">Meal Orders Breakdown</h6>
          </div>
          <button className="mainButton border-0 rounded text-white p-2 h6 mb-0">Register staff</button>
        </div>
        <div className="d-flex gap-3">
          <div className="d-flex rounded w-25 px-3 container-search bg-white border align-items-center">
            <CgSearch fill="#5F6063"/>
            <Form.Control className="w-75 h6 border-0 mb-0" type="text" placeholder="Search" />
          </div>
          <Button className="d-flex gap-3 align-items-center border-0 text-secondary" style={{backgroundColor: '#F1F1F1', color: '#232323', fontWeight: 500}}>  
            <IoFilter/>
            Filters
          </Button>
        </div>
        
      </Row>
    </Fragment>
  )
};

export default HRStaffDashboard;
