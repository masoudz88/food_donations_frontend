import Credential from "./Credential";
import Mainpage from "./Mainpage";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "./Contexts/LoginContext";

const App = () => {
  const Container = styled.div`
    float: center;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    min-width: 100vh;
    display: block;
  `;

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [companies, setCompanies] = useState([]);

  return (
    <Router>
      <Container>
        <Switch>
          <LoginContext.Provider
            value={{
              name,
              setName,
              isLogged,
              setIsLogged,
              companies,
              setCompanies,companyName, setCompanyName,
            }}
          >
            <Route path="/" exact component={Credential}></Route>
            <Route path="/Mainpage" exact component={Mainpage}></Route>
            <Route
              path="/Mainpage/Products"
              exact
              component={ProductCard}
            ></Route>
          </LoginContext.Provider>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
