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
  const [password, setPass] = useState("");

  return (
    <Router>
      <Container>
        <Switch>
          <LoginContext.Provider value={{ name, setName, password, setPass }}>
            <Route path="/" exact component={Credential} />
            {name && password ? (
              <Route path="/Mainpage" exact component={Mainpage} />
            ) : (
              <Route path="/" exact component={Credential} />
            )}
          </LoginContext.Provider>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
