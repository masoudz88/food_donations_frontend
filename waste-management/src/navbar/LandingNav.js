import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import {
  UserOutlined,
  ExportOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { LoginContext } from "../Contexts/LoginContext";

const LandingNav = () => {
  const { Header } = Layout;
  const { name } = useContext(LoginContext);

  return (
    <div>
      <Layout className="layout">
        <Header className="header">
          <div className="logo" />
          <Menu
            className="navmenuItems"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="1" icon={<UserOutlined />} title="Log In">
              <Link to="Credential">Log In</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ExportOutlined />} title="Sign Up">
              <Link to="Signup">Sign Up</Link>
            </Menu.Item>
          </Menu>
          {name && (
            <Button type="dashed" icon={<ShoppingOutlined />} className="companyCardButton" >
              <Link to="Mainpage">Company Card</Link>
            </Button>
          )}
        </Header>
      </Layout>
    </div>
  );
};

export default LandingNav;
