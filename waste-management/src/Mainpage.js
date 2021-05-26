import { Col, Row, Divider } from "antd";
import CompanyCard from "./CompanyCard";
import { useContext, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";

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

  return (
    <div className="content">
      <h1 style={{ textAlign: "center" }}>you have logged in as: {name}</h1>
      <Divider orientation="left">Companies List</Divider>

      <Row gutter={[50, 50]}>
        <Col className="gutter-row" span={6}>
          <CompanyCard />
        </Col>
      </Row>
    </div>
  );
};

export default Mainpage;
