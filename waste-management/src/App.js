import Credential from "./Credential";
import Mainpage from "./Mainpage";
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
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Router>
      <Container>
        <Switch>
          <LoginContext.Provider
            value={{ name, setName, isLogged, setIsLogged }}
          >
            <Route path="/" exact component={Credential}></Route>
            <Route path="/Mainpage" exact component={Mainpage}></Route>
            
          </LoginContext.Provider>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
