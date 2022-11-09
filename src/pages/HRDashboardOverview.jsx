import { Col, Row, Button, Form, Card, Table } from "react-bootstrap";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { options, dataStyling } from "../Utilities/BarConfig";
import data from "../Utilities/data.json";
import { Fragment } from "react";
import CustomCard from "../components/CustomCard";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HRDashboardOverview = () => {
  return (
    <Fragment>
      <Col xs={10}>
        <Row className="py-4 px-3">
          <div className="d-flex justify-content-between">
            <div>
              {" "}
              <h2>Overview</h2>
              <h6 className="text-secondary">Meal Orders Breakdown</h6>
            </div>

            <div className="d-flex gap-3">
              {" "}
              <Form.Select className="form-height w-50">
                <option>January 2022</option>
                <option>February 2022</option>
              </Form.Select>
              <Button className="mainBtn text-center h6">
                Download Report
              </Button>
            </div>
          </div>
        </Row>
        <Row>
          <Col>
            <Card
              style={{
                width: "auto",
                backgroundColor: "#F6FAFD",
                border: "none",
              }}
            >
              <div className="mt-3">
                <Bar options={options} data={dataStyling} />
              </div>
            </Card>
          </Col>
          <Col xs={5} className="d-flex flex-column  gap-3">
            <CustomCard
              pillColor={"#206AA2"}
              title={"Meal consumption"}
              value={12450}
            />
            <CustomCard
              pillColor={"#C79960"}
              title={"Extra consumption"}
              value={12450}
            />
            <CustomCard
              pillColor={"#6C63FF"}
              title={"Consumption days"}
              value={24}
            />
            <CustomCard
              pillColor={"#3D8CD6"}
              title={"Total value"}
              value={24900}
            />
            {/* <Card className="card-group py-3 px-3">
              <Card.Text>
                <h6>Meal Consumption</h6>
                <span>NGN 12,450</span>
              </Card.Text>
            </Card>
            <Card className="card-group mt-2 py-3 px-3">
              <Card.Text>
                <h6>Extra Consumption</h6>
                <span>NGN 12,450</span>
              </Card.Text>
            </Card>
            <Card className="card-group mt-2 py-3 px-3">
              <Card.Text>
                <h6>Consumption Days</h6>
                <span>24</span>
              </Card.Text>
            </Card>
            <Card className="card-group mt-2 py-2 px-3">
              <Card.Text>
                <h6>Total Value</h6>
                <span>NGN 24,900</span>
              </Card.Text>
            </Card> */}
          </Col>
        </Row>
        <Row className="mt-3 p-3 chart align-items-center ">
          <Card
            className=""
            style={{
              backgroundColor: "#F6FAFD",
              border: "none",
            }}
          >
            <Row className="p-4 chart align-items-center">
              <CustomCard pillColor={"#206AA2"} title={"Recent consumptions"} />
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
                      <tr
                        className="py-2 m-0 h6 align-items-center"
                        key={index}
                      >
                        <td>{x.month}</td>
                        <td>NGN {x.mealConsumption}</td>
                        <td>NGN {x.extraConsumption}</td>
                        <td>{x.consumptionDays}</td>
                        <td>NGN {x["Total value"]}</td>
                        <td>
                          <button className="viewButton text-white rounded p-2">
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
          </Card>
        </Row>
      </Col>
    </Fragment>
  );
};

export default HRDashboardOverview;
