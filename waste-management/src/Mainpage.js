import { Divider, Button } from "antd";
import CompanyCards from "./CompanyCards";
import { useContext, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import "./index.css";
import { Link } from "react-router-dom";
import debugFactory from "debug";

const debug = debugFactory("app");

const Mainpage = (props) => {
  const { name, isLogged } = useContext(LoginContext);

  debug(name);
  debug(isLogged);

  useEffect(() => {
    debug("Mainpage rendering.");
    if (isLogged === false) {
      props.history.push("/");
    }
  }, [isLogged, props.history]);

  return (
    <div className="content">
      <h1 style={{ textAlign: "center" }}>you have logged in as: {name}</h1>
      <Divider orientation="left">Companies List</Divider>
      <div>
        <CompanyCards />
      </div>
      <Link to="Mainpage/Form">
        <Button>Add New Companies</Button>
      </Link>
    </div>
  );
};

export default Mainpage;
