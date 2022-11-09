import React, {Fragment} from "react";
import { Form, Button, Card } from "react-bootstrap";
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";
import {routes} from '../Utilities/Routes';
import '../App.css';

const EmailVerification = () => {
  const navigate = useNavigate();
  const [code, setCode] = React.useState('');
  const handleChange = (code) => setCode(code);

  return (
    <Fragment>
      <Card.Title className="text-center">Email Verification</Card.Title>
      <Card.Subtitle className="minorText text-center">We have sent code to your email</Card.Subtitle>
      <Card.Body className="mt-4">
        <Form>
          <OTPInput
            className={'w-100 gap-3 verifyInput'}
            inputClassName={'w-100 h-100 m-0 inputBorder'}
            value={code}
            otpType={'number'}
            onChange={handleChange}
            OTPLength={6}
          />
          <Button onClick={() => navigate(routes.ChangePassword)} className="w-100 p-3 mt-5 h6 mainBtn text-center text-white" size="lg">
            Verify Account
          </Button>
        </Form>
      </Card.Body>
    </Fragment>
  )
};

export default EmailVerification;
