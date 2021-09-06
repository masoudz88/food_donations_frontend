import Credential from "./Credential";
import Landingpage from "./Landingpage";
import Mainpage from "./Mainpage";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "./Contexts/LoginContext";
import { CompanyContext } from "./Contexts/CompanyContext";
import { Companyform } from "./Companyform";
import { Button, Layout, Menu, Dropdown, Typography } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import debugFactory from "debug";
import useCompany from "./useCompany";
import Signup from "./Signup";
import useProduct from "./useProduct";
import UpdateCompany from "./UpdateCompany";
import Productinfo from "./Productinfo";
import { AddproductFrom } from "./AddProductForm";
import useUsers from "./useUsers";

const { Header, Footer } = Layout;
const { Title } = Typography;
const Container = styled.div`
  float: center;
  align-items: center;
  justify-content: space-around;
  display: block;
  padding-bottom: 5.5rem;
`;

const debug = debugFactory("app");
debug("debugger");

const App = (props) => {
  const myStyle = {
    color: "white",
  };
  const onClick = () => {
    logoutUser(props);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">My Profile</Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={onClick} danger key="1">
        Log Out
      </Menu.Item>
    </Menu>
  );

  const [isLogged, setIsLogged] = useState(false);
  const [name, setName] = useState("");

  const {
    companies,
    deleteCompany,
    addCompany,
    updateCompany,
    fetchCompaniesById,
  } = useCompany();
  const { products, deleteProduct, fetchProducts, addProduct } = useProduct();
  const { addUser, loginUser, logoutUser } = useUsers({
    setName,
    setIsLogged,
  });
  return (
    <Router>
      <Header className="mainheader" style={myStyle}>
        <Link to="/">
          <Button type="text" style={{ color: "white", textAlign: "left" }}>
            Waste Management System
          </Button>
        </Link>
        {!isLogged && <Redirect to="/" />}
        {name && (
          <Menu
            className="menuItems"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item
              style={{ color: "white" }}
              key="1"
              icon={<UserOutlined />}
              title="Log In"
            >
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button
                  style={{ color: "white" }}
                  type="link"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Title style={{ color: "white" }} level={5}>                    
                    {name}
                  </Title>{" "}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Menu.Item>
          </Menu>
        )}
      </Header>
      <Container className="container">
        <Switch>
          <LoginContext.Provider
            value={{
              isLogged,
              setIsLogged,
              name,
              setName,
              loginUser,
            }}
          >
            <Route path="/credential" exact component={Credential}></Route>
            <Route path="/" exact component={Landingpage}></Route>
            <CompanyContext.Provider
              value={{
                companies,
                fetchCompaniesById,
                deleteCompany,
                addCompany,
                updateCompany,
                products,
                deleteProduct,
                fetchProducts,
                addProduct,
                addUser,
                logoutUser,
              }}
            >
              <Route path="/Mainpage" exact component={Mainpage}></Route>
              <Route
                path="/Mainpage/AddCompany"
                exact
                component={Companyform}
              ></Route>
              <Route
                path="/Mainpage/company/:companyName/AddProductForm"
                exact
                component={AddproductFrom}
              ></Route>
              <Route
                path="/Mainpage/Update/:id"
                exact
                component={UpdateCompany}
              ></Route>
              <Route
                path="/Mainpage/company/:companyId"
                exact
                component={Productinfo}
              ></Route>
              <Route path="/login">login</Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/profile">Complete you profile!</Route>
            </CompanyContext.Provider>
          </LoginContext.Provider>
        </Switch>
      </Container>
      <Footer className="footer">written by Masoud Zare</Footer>
    </Router>
  );
};

export default App;
