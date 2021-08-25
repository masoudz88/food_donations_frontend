import { Divider, Button, Dropdown } from "antd";
import CompanyCards from "./CompanyCards";
import { useContext, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import "./index.css";
import { Link } from "react-router-dom";
import debugFactory from "debug";
import { Layout, Menu } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const debug = debugFactory("Mainpage");

const Mainpage = (props) => {
  const { name, isLogged } = useContext(LoginContext);
  const { Header } = Layout;
  debug(name);
  debug(isLogged);
  const menu = (
    <Menu>
      <Menu.Item key="0">My Profile</Menu.Item>
      <Menu.Divider />
      <Menu.Item danger key="1">
        Log Out
      </Menu.Item>
    </Menu>
  );

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
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Current User: {!name && "No User"}
                  {name.toUpperCase()} <DownOutlined />
                </a>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>

      <Divider orientation="left">Companies List</Divider>
      <div>
        <CompanyCards />
      </div>
      <Link to="Mainpage/AddCompany">
        <Button>Add New Companies</Button>
      </Link>
    </div>
  );
};

export default Mainpage;
