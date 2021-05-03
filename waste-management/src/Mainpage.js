import { Col, Row } from "antd";
import Grid from "antd/lib/card/Grid";
import { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";


const Mainpage = () => {
  const { name } = useContext(LoginContext);
  console.log(name);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>you have logged in as: {name}</h1>
      <h2> Companies list</h2>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Row>
            <Col>Sobeys</Col>
          </Row>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Row>
            <Col>Walmart</Col>
          </Row>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Row>
            <Col>Costco</Col>
          </Row>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mainpage;
