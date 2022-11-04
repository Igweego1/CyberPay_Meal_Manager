import { Button, Container } from "react-bootstrap";
import "../styles/ContactAdmin.css";
import cyberPaylogo from "../assets/img/cyberlogoadmin.svg";

const ContactAdmin = () => {
  return (
    <Container fluid className="body ">
      <div className="ms-5">
        <img className="format-logo" src={cyberPaylogo} alt="cyberlogo" />
        <h1 className="text-white fw mt-4">Contact the Admin</h1>
        <div className="text-white txt-sub">
          Don't panic.... quickly reach out to the Human Resource Department for
          your account registration{" "}
        </div>
        <Button className="btn-md btn-light adminBtn mt-4">Sign in</Button>
      </div>
    </Container>
  );
};

export default ContactAdmin;
