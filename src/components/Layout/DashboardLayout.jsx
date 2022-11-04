import { Fragment } from "react";
import { Container } from "react-bootstrap";

const DashBoardLayout = () => {
  return (
    <Fragment>
      <Container as={"section"} fluid className="auth-layout"></Container>
    </Fragment>
  );
};

export default DashBoardLayout;
