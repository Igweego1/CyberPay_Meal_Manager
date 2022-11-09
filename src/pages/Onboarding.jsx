import { Button, Container, Navbar, Row, Col } from "react-bootstrap";
import {routes} from '../Utilities/Routes';
import '../App.css';
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="onboarding-body">
      <Row className="mx-5 morePadding"> 
        <Col className={'text-center text-white text-md-start'} xs={12} md={6}>
          <h1>Contact the Admin</h1>
          <p>
            Don’t panic.... quickly reach out to the Human 
            Resource Department for your account registration. 
          </p>
          <div className="d-flex gap-3">
            <Button onClick={() => navigate(routes.HRDashboardOverview)} className="btn-md btn-light adminBtn mt-3">Sign in as HR</Button>
            <Button onClick={() => navigate(routes.StaffDashboardOverview)} className="btn-md btn-light adminBtn mt-3">Sign in as Staff</Button>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Onboarding;