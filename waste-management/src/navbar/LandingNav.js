import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
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
            <Menu.Item key="3" icon={<ShoppingOutlined />} title="companyCard">
              {name && (
                <Menu.Item style={{ float: "right" }}>
                  <Link to="Mainpage">Company Card</Link>
                </Menu.Item>
              )}
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default LandingNav;
