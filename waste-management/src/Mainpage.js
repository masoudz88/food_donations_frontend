import { Col, Row, Divider, Button } from "antd";

import { useContext, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import companyList from "./companyList.json";
import Sobeys from "./Companies/Sobeys";
import Walmart from "./Companies/Walmart";
import Costco from "./Companies/Costco";
import Mcdonald from "./Companies/Mcdonald";

const Mainpage = (props) => {
  const { name } = useContext(LoginContext);
  const { isLogged, setIsLogged } = useContext(LoginContext);
  console.log(name);
  console.log(isLogged);

  useEffect(() => {
    if (isLogged === false) {
      props.history.push("/");
    }
  }, [isLogged, props.history]);

  const companyClick = () => {
    companyList.map((co) => {
      switch (co.name) {
        case "Sobeys":
          return props.history.push("/Mainpage/Sobeys");
        case "Walmart":
          return props.history.push("/Mainpage/Walmart");
        case "Costco":
          return props.history.push("/Mainpage/Costco");
        case "McDonald's":
          return props.history.push("/Mainpage/Mcdonald");
        default:
          return <h1>No Company match</h1>;
      }
    });
  };
  return (
    <div className="content">
      <h1 style={{ textAlign: "center" }}>you have logged in as: {name}</h1>
      <Divider orientation="left">Companies List</Divider>
      <Row className="companyNames" gutter={[50, 50]}>
        {companyList.map((co) => (
          <Col className="gutter-row" span={6} key={co.id}>
            <Button onClick={companyClick}>{co.name}</Button>
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
