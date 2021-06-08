import Credential from "./Credential";
import Mainpage from "./Mainpage";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "./Contexts/LoginContext";
import CompanyInfo from "./CompanyInfo";
import { Companyform } from "./Contexts/Companyform";

const App = () => {
  const Container = styled.div`
    float: center;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    min-width: 100vh;
    display: block;
  `;
  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");

  return (
    <Router>
      <Container>
        <Switch>
          <LoginContext.Provider
            value={{ isLogged, setIsLogged, name, setName }}
          >
            <Route path="/" exact component={Credential}></Route>
            <Route path="/Mainpage" exact component={Mainpage}></Route>
            <Route path="/Mainpage/Form" exact component={Companyform}></Route>
            <Route
              path="/Mainpage/company/:companyId"
              component={CompanyInfo}
            ></Route>
          </LoginContext.Provider>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
