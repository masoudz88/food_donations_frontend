import Credential from "./Credential";
import Mainpage from "./Mainpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Credential} />
          <Route path="/Mainpage" exact component={Mainpage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
