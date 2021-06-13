import { Col, Row, Divider, Button } from "antd";
import CompanyCards from "./CompanyCards";
import { useContext, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import "./index.css";
import { Link } from "react-router-dom";

const Mainpage = (props) => {
  const { name } = useContext(LoginContext);
  const { isLogged } = useContext(LoginContext);
  console.log(name);
  console.log(isLogged);

  useEffect(() => {
    console.log("Mainpage rendering.");
    if (isLogged === false) {
      props.history.push("/");
    }
  }, [isLogged, props.history]);

  return (
    <div className="content">
      <h1 style={{ textAlign: "center" }}>you have logged in as: {name}</h1>
      <Divider orientation="left">Companies List</Divider>
      <div className="rows">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <CompanyCards />
          </Col>
        </Row>
      </div>
      <Link to="Mainpage/Form">
        <Button>Add New Companies</Button>
      </Link>
    </div>
  );
};

export default Mainpage;
