import Credential from "./Credential";
import Mainpage from "./Mainpage";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "./Contexts/LoginContext";
import { CompanyContext } from "./Contexts/CompanyContext";
import CompanyInfo from "./CompanyInfo";
import { Companyform } from "./Companyform";
import { Layout } from "antd";
import debugFactory from "debug";
import useCompany from "./useCompany";
import Signup from './Signup';
import useProduct from "./useProduct";

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

  const { companies, deleteCompany, setCompanies } = useCompany();
  const { products, deleteProduct } = useProduct();
  return (
    <Router>
      <Header style={myStyle}>Waste Management System</Header>
      <Container>
        <Switch>
          <LoginContext.Provider
            value={{ isLogged, setIsLogged, name, setName }}
          >
            <Route path="/" exact component={Credential}></Route>
            <CompanyContext.Provider
              value={{ companies, deleteCompany, setCompanies, products, deleteProduct }}
            >
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
              <Route path="/login">login</Route>
              <Route path="/signup"><Signup/></Route>
              <Route path="/logout">log out</Route>
              <Route path="/whoami">who am I?</Route>
            </CompanyContext.Provider>
          </LoginContext.Provider>
        </Switch>
      </Container>
      <Footer className="footer">written by Masoud Zare</Footer>
    </Router>
  );
};

export default App;
