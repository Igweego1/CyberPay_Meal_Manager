import React from "react";
import { Container, Row, Col, Navbar, Card, Stack, Button, Form } from "react-bootstrap";
import { routes, dashboardRoutes } from "../../Utilities/Routes";
import '../../App.css';
import { Outlet, useNavigate } from "react-router-dom";
import IMAGES from "../../assets/img/images";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const links = [
    {
      name: 'Overview',
      path: routes.StaffDashboardOverview,
      icon: IMAGES.book
    },
    {
      name: 'Consumptions',
      path: routes.Consumptions,
      icon: IMAGES.cutlery
    },
    {
      name: 'Profile',
      path: '',
      icon: IMAGES.user
    }
  ]

  if(window.location.pathname !== routes.Vendor && window.location.pathname !== routes.StaffDashboardOverview) {
    links.splice(2, 0, 
      {
        name: 'Staff',
        path: window.location.pathname === routes.HRDashboardOverview ? routes.HRStaffDashboard : routes.StaffDashboardOverview,
        icon: IMAGES.wallet
      },
      {
        name: 'Vendors',
        path: routes.Vendor,
        icon: IMAGES.wallet
      },
      {
        name: 'Finances',
        path: routes.Finance,
        icon: IMAGES.wallet
      }
    )
  }

  if(dashboardRoutes.indexOf(window.location.pathname) !== -1){
    return (
        <Container fluid className="p-0">
            <Row className="m-0">
              <Col xs={0} md={2} className="sidebar d-none d-md-block d-flex flex-column align-items-center p-0">
                <Navbar className="d-flex flex-column w-100 fixed-start my-2 justify-content-between" bg="white">
                  <Navbar.Brand className="w-100 m-0 px-4 border-bottom">
                    <img src={IMAGES.logo}/>
                  </Navbar.Brand>
                  <Card className='welcome-card w-75 p-3 my-4'>
                    <Card.Subtitle className="mb-2">Welcome back</Card.Subtitle>
                    <Card.Subtitle className="titleName">Chisom</Card.Subtitle>
                  </Card>
                  <div className="w-75 my-3">
                    <h6 className="h6">MENU</h6>
                  </div>
                  <Stack gap={3} className="px-4 py-3">
                    {links.map((x, index) => {
                      return (
                        <Button key={index} className="menu-button p-3 d-flex gap-3" onClick={() => navigate(`${x.path}`)}>
                          <img className="img" src={x.icon} alt="icons"/>
                          <h6 className="h14 m-0 pt-1">{x.name}</h6>
                        </Button>
                      )
                    })}
                  </Stack>
                  <Card className='welcome-card w-75 p-3 my-4 text-center'>
                    <Card.Img src={IMAGES.profile} width={50} height={50} className='mb-2' />
                    <Card.Title className="mb-2 h6">Jacinta Chianumba</Card.Title>
                    <Card.Subtitle className="titleName mb-4">CYB-375</Card.Subtitle>
                    <Button onClick={() => navigate(routes.Signin)} variant="outline-danger" className="h6 text-danger">Sign out</Button>
                  </Card>
                </Navbar>
              </Col>
              <Col xs={12} md={10} className="m-0 p-0">
                <Navbar bg="white borderLight px-4 d-flex flex-column flex-md-row justify-content-between">
                  <Navbar.Text>Meal orders breakdown - Here's what's happening</Navbar.Text>
                  <div className="d-flex justify-content-between gap-3">
                    <div className="p-2 d-flex container-search rounded">
                      <Form.Control className="w-75 h6" type="text" placeholder="Search" />
                      <button className="w-25 border-0 bg-white h6 rounded">Enter</button>
                    </div>
                    {window.location.pathname !== routes.HRDashboardOverview && <img src={IMAGES.bell}/>}
                  </div>
                </Navbar>
                <Outlet/>
              </Col>
            </Row>
          </Container>
      
    );
  }
};

export default DashboardLayout;
