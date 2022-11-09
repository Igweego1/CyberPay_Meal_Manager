import { Card, Col, Row } from "react-bootstrap";
import '../App.css';

const CustomCard = ({pillColor, title, value}) => {
  return (
    <Card className="cards w-100 p-0 h-100">
      <Card.Body>
        <Row className={`${value ? '' : 'w-50 align-items-center'}`}>
          <Col xs={1}>
            <Card.Img style={{backgroundColor:`${pillColor}`, width: '18px', height: '30px'}}></Card.Img>
          </Col>
          <Col xs={11}>
            <h6>{title}</h6>
            {value && (<Card.Subtitle>{value > 24 && 'N'} {value}</Card.Subtitle>)}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
