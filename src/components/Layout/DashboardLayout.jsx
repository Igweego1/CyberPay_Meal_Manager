import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Nav,
  Navbar,
  Card,
  Stack,
} from "react-bootstrap";
import { dashboardRoutes, routes } from "../../Utilities/Routes";
import { Outlet, useNavigate } from "react-router-dom";
import IMAGES from "../../assets/img/images";

const DashBoardLayout = () => {
  const navigate = useNavigate();

  const links = [
    {
      name: "Overview",
      path: routes.StaffDashboardOverview,
      icon: IMAGES.note,
    },
    {
      name: "Consumptions",
      path: routes.Consumptions,
      icon: IMAGES.cutlery,
    },
    {
      name: "Profile",
      path: routes.SignIn,
      icon: IMAGES.profile,
    },
  ];

  if (
    window.location.pathname !== routes.Vendor &&
    window.location.pathname !== routes.StaffDashboardOverview
  ) {
    links.splice(
      2,
      0,
      {
        name: "Staff",
        path:
          window.location.pathname === routes.HRDashboardOverview
            ? routes.HRDashboardOverview
            : routes.StaffDashboardOverview,
        icon: IMAGES.wallet,
      },
      {
        name: "Vendors",
        path: routes.Vendor,
        icon: IMAGES.wallet,
      },
      {
        name: "Finances",
        path: routes.Finance,
        icon: IMAGES.wallet,
      }
    );
  }

  if (dashboardRoutes.indexOf(window.location.pathname) !== -1) {
    return (
      <Container fluid className="bg-dashboard">
        <Navbar collapseOnSelect expand="lg" className="border-bottom">
          <Navbar.Brand className=" ms-3">
            {" "}
            <img src={IMAGES.logo} alt="logo" />
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
          <Col lg={2} md={2} sm={2} xs={2} className="border-end fixed-start">
            <Container fluid>
              <Card className="welcome-card w-75 p-3 my-4">
                <Card.Subtitle className="mb-2">Welcome back</Card.Subtitle>
                <Card.Subtitle className="titleName">Chisom</Card.Subtitle>
              </Card>
              <h6 className="mt-4">Menu</h6>
              <Stack className="gap-2">
                {links.map((x, index) => {
                  return (
                    <Button
                      key={index}
                      className="menu-button d-flex gap-3 p-3"
                      onClick={() => navigate(`${x.path}`)}
                    >
                      <img className="img" src={x.icon} alt="icons" />
                      <h6 className="h14 m-0 ">{x.name}</h6>
                    </Button>
                  );
                })}

                {/* <Button className=" mt-2 w-100 text-start menu-button dash-btn">
                  <div className="">
                    {" "}
                    <img className="img" src={IMAGES.note} alt="note" />
                    <span className="ms-2 h14"> Overview</span>
                  </div>
                </Button>
                <Button className=" mt-2 w-100 text-start menu-button dash-btn">
                  <div>
                    <img className="img" src={IMAGES.cutlery} alt="note" />
                    <span className="ms-2 h14">Consumptions</span>
                  </div>
                </Button>
                <Button className=" mt-2 w-100 text-start menu-button dash-btn">
                  <div>
                    {" "}
                    <img className="img" src={IMAGES.wallet} alt="note" />
                    <span className="ms-2 h14">Staff</span>
                  </div>
                </Button>
                <Button className=" mt-2 w-100 text-start menu-button dash-btn">
                  <div>
                    <img className="img" src={IMAGES.wallet} alt="note" />
                    <span className="ms-2 h14">Vendors</span>
                  </div>
                </Button>
                <Button className=" mt-2 w-100 text-start menu-button dash-btn">
                  <div>
                    <img className="img" src={IMAGES.wallet} alt="note" />
                    <span className="ms-2 h14">Finances</span>
                  </div>
                </Button>
                <Button className=" mt-2 text-start  w-100 menu-button dash-btn">
                  <div>
                    {" "}
                    <img className="img" src={IMAGES.profile} alt="note" />
                    <span className="ms-2 h14">Profile</span>
                  </div>
                </Button> */}
              </Stack>

              <Card
                className="mx-auto text-center mt-4 h-100 d-flex align-items-center p-1"
                style={{
                  width: "170px",
                  backgroundColor: "#F6FAFD",
                  border: "none",
                }}
              >
                <Card.Img
                  className="profile-img  mt-2"
                  img
                  src={IMAGES.user}
                  alt="users"
                />
                <Card.Title className=" h6 mt-2 ">Jacinta Chianumba</Card.Title>
                <Card.Subtitle className="titleName mb-4">
                  CYB-375
                </Card.Subtitle>
                <Button
                  variant="outline-danger"
                  className="h6 text-danger w-100"
                >
                  Sign out
                </Button>
              </Card>
            </Container>
          </Col>
          <Outlet />
        </Row>
      </Container>
    );
  }
};

export default DashBoardLayout;
