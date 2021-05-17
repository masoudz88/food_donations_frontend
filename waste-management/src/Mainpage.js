import { Col, Row, Divider, Button } from "antd";

import { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import companyList from "./companyList.json";

const Mainpage = () => {
  const { name } = useContext(LoginContext);
  console.log(name);

  return (
    <div className="content">
      <h1 style={{ textAlign: "center" }}>you have logged in as: {name}</h1>
      <Divider orientation="left">Companies List</Divider>

      <Row className="companyNames" gutter={[50, 50]}>
        {companyList.map((co) => (
          <Col className="gutter-row" span={6} key={co.id}>
            <Button>{co.name}</Button>
          </Col>
        ))}
      </Row>
      <Row gutter={[50, 50]}>
        {companyList.map((co) => (
          <Col className="gutter-row" span={6} key={co.id}>
            <img alt={co.name} src={`${co.image}`} width="100%" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Mainpage;
