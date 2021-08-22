import { Divider, Button } from "antd";
import CompanyCards from "./CompanyCards";
import { useContext, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import "./index.css";
import { Link } from "react-router-dom";
import debugFactory from "debug";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const debug = debugFactory("Mainpage");

const Mainpage = (props) => {
  const { name, isLogged } = useContext(LoginContext);
  const { Header } = Layout;
  debug(name);
  debug(isLogged);

  useEffect(() => {
    debug("Mainpage rendering.");
    if (isLogged === false) {
      props.history.push("/");
    }
  }, [isLogged, props.history]);

  return (
    <div className="mainpage">
      <Layout className="layout">
        <Header className="header">
          <div className="logo" />
          <Menu
            className="menuItems"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="1" icon={<UserOutlined />} title="Log In">
              <Link to="Credential">
                Current User: {!name && "No User"}
                {name.toUpperCase()}
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>

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
