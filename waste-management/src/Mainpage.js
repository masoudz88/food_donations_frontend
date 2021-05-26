import { Col, Row, Divider, Button } from "antd";
import Company from "./Company";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import companyList from "./companyList.json";

const Mainpage = (props) => {
  const { name } = useContext(LoginContext);
  const { isLogged, setIsLogged } = useContext(LoginContext);
  const [companies, setCompanies] = useState([]);
  console.log(name);
  console.log(isLogged);

  useEffect(() => {
    if (isLogged === false) {
      props.history.push("/");
    }
  }, [isLogged, props.history]);

  useEffect(() => {
    console.log("setting companies to json list");
    // api call
    setCompanies(companyList);
  }, [setCompanies]);

  const companyClick = () => {
    // companyList.map((co) => {
    //   switch (co.name) {
    //     case "Sobeys":
    //       return props.history.push("/Mainpage/Sobeys");
    //     case "Walmart":
    //       return props.history.push("/Mainpage/Walmart");
    //     case "Costco":
    //       return props.history.push("/Mainpage/Costco");
    //     case "McDonald's":
    //       return props.history.push("/Mainpage/Mcdonald");
    //     default:
    //       return <h1>No Company match</h1>;
    //   }
    // });
  };
  return (
    <div className="content">
      {console.log("rendering", companies)}
      <h1 style={{ textAlign: "center" }}>you have logged in as: {name}</h1>
      <Divider orientation="left">Companies List</Divider>
      {companies.length === 0 && <h2>No companies found.</h2>}
      <Row gutter={[50, 50]}>
        {companies.map((co) => (
          <Col className="gutter-row" span={6} key={co.id}>
            <Company />
          </Col>
        ))}
      </Row>
      <Button
        onClick={() => {
          setCompanies(
            companies.concat([
              {
                id: "5",
                name: "McDonald's",
                image: "./logos/McDonalds-Logo.png",
              },
            ])
          );
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          const newCompanies = [...companies];
          newCompanies.pop();
          setCompanies(newCompanies);
        }}
      >
        remove
      </Button>
    </div>
  );
};

export default Mainpage;
