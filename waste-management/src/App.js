import Credential from "./Credential";
import Mainpage from "./Mainpage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "./Contexts/LoginContext";
import { CompanyContext } from "./Contexts/CompanyContext";
import CompanyInfo from "./CompanyInfo";
import { Companyform } from "./Contexts/Companyform";
import { Layout } from "antd";
import debugFactory from "debug";

const { Header, Footer } = Layout;
const Container = styled.div`
  float: center;
  align-items: center;
  justify-content: space-around;
  display: block;
  padding-bottom: 5.5rem;
`;

const debug = debugFactory("app");
debug("debugger");

const App = () => {
  const myStyle = {
    color: "white",
  };

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    fetch("/api/products/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setCompanies(jsonResponse));
  }, []);
  console.log(companies[0]["id"],companies[0]["name"]);

  return (
    <Router>
      <Header style={myStyle}>Waste Management System</Header>
      <Container>
        <Switch>
          <LoginContext.Provider
            value={{ isLogged, setIsLogged, name, setName }}
          >
            <Route path="/" exact component={Credential}></Route>
            <CompanyContext.Provider value={{ companies, setCompanies }}>
              <Route path="/Mainpage" exact component={Mainpage}></Route>
              <Route
                path="/Mainpage/Form"
                exact
                component={Companyform}
              ></Route>
              <Route
                path="/Mainpage/company/:companyId"
                component={CompanyInfo}
              ></Route>
            </CompanyContext.Provider>
          </LoginContext.Provider>
        </Switch>
      </Container>
      <Footer className="footer">written by Masoud Zare</Footer>
    </Router>
  );
};

export default App;
