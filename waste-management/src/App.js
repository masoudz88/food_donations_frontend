import Credential from "./Credential";
import Mainpage from "./Mainpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

const App = (props) => {
  const Container = styled.div`
    float: center;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    min-width: 100vh;
    display: block;
  `;

  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact component={Credential} />
          <Route path="/Mainpage" exact component={Mainpage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
