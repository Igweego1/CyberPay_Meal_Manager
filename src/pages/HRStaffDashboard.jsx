// import React, {Fragment} from "react";
// import { Row, Form, Button } from "react-bootstrap";
// import { CgSearch } from 'react-icons/cg';
// import { IoFilter } from 'react-icons/io5';
// import '../App.css';

// const HRStaffDashboard = () => {
//   return (
//     <Fragment>
//       <Row className="m-0 px-4 py-4">
//         <div className="d-flex justify-content-between">
//           <div>
//             <h2>Staff</h2>
//             <h6 className="text-secondary">Meal Orders Breakdown</h6>
//           </div>
//           <button className="mainButton border-0 rounded text-white p-2 h6 mb-0">Register staff</button>
//         </div>
//         <div className="d-flex gap-3">
//           <div className="d-flex rounded w-25 px-3 container-search bg-white border align-items-center">
//             <CgSearch fill="#5F6063"/>
//             <Form.Control className="w-75 h6 border-0 mb-0" type="text" placeholder="Search" />
//           </div>
//           <Button className="d-flex gap-3 align-items-center border-0 text-secondary" style={{backgroundColor: '#F1F1F1', color: '#232323', fontWeight: 500}}>  
//             <IoFilter/>
//             Filters
//           </Button>
//         </div>
        
//       </Row>
//     </Fragment>
//   )
// };

// export default HRStaffDashboard;

import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import data from "../Utilities/data.json";
import React, {Fragment} from "react";
import CustomModal from "../components/CustomModal";
import { CgSearch } from "react-icons/cg";
import { IoFilter } from "react-icons/io5";
import CustomCard from "../components/CustomCard";

const HRStaffDashboard = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Fragment>
      <Row className="m-0 px-4 py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h2>Overview</h2>
            <h6 className="text-secondary">Meal Orders Breakdown</h6>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <button onClick={() => setModalShow(true)} className="mainButton border-0 rounded text-white p-2 h6 mb-0">Register Staff</button>
          </div>
          <CustomModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <div className="d-flex gap-3 mt-4">
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

export default HRStaffDashboard;
