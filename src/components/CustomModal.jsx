import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register Staff
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mx-5">
            <Col xs={6}>
              <Row>
                <Col xs={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prefix</Form.Label>
                    <Form.Select className="text-muted">
                      <option selected>CYB</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={8}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Staff id</Form.Label>
                    <Form.Control type="text" placeholder="Staff id" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Enter department" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Other Names</Form.Label>
                <Form.Control type="text" placeholder="Enter names" />
              </Form.Group>

              <Row>
                <Col xs={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Code</Form.Label>
                    <Form.Select className="text-muted">
                      <option selected>+234</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={8}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Staff Category</Form.Label>
                <Form.Control type="text" placeholder="Enter category" />
              </Form.Group>
            </Col>
            <button
              className="mainButton border-0 rounded text-white p-2 h6 mb-0 w-50 mx-auto"
              onClick={props.onHide}
            >
              Register Staff
            </button>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;