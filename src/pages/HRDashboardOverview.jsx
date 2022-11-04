import {
  Col,
  Container,
  Row,
  Button,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import cyberPayLogo from "../assets/img/cyberpaylogo.svg";
import "../styles/HrDashboardOverview.css";

const HRDashboardOverview = () => {
  return (
    <Container fluid className="bg-dashboard">
      <Navbar collapseOnSelect expand="lg" className="border-bottom">
        <Navbar.Brand className=" ms-3">
          {" "}
          <img src={cyberPayLogo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <span class="navbar-text">Meal Orders Breakdown</span>
            <span class="navbar-text">-Here's what happening</span>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col xs={2} className="border-end vh-100">
          hjbdnkn
        </Col>
        <Col xs={10}>vdsvv</Col>
      </Row>
    </Container>
  );
};

export default HRDashboardOverview;
