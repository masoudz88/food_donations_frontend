import Credential from "./Credential";
import Mainpage from "./Mainpage";
import companyList from "./companyList.json";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "./Contexts/LoginContext";
import { CompanyContext } from "./Contexts/CompanyContext";
import CompanyInfo from "./CompanyInfo";
import { Companyform } from "./Contexts/Companyform";
import { Layout } from "antd";

const { Header, Footer } = Layout;
const Container = styled.div`
  float: center;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  display: block;
`;

const App = () => {
  const myStyle = {
    color: "white",
  };

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");
  const [companies, setCompanies] = useState(companyList);

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
