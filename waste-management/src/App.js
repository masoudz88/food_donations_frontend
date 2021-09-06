import Credential from "./Credential";
import Landingpage from "./Landingpage";
import Mainpage from "./Mainpage";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "./Contexts/LoginContext";
import { CompanyContext } from "./Contexts/CompanyContext";
import { Companyform } from "./Companyform";
import { Layout } from "antd";
import debugFactory from "debug";
import useCompany from "./useCompany";
import Signup from "./Signup";
import useProduct from "./useProduct";
import UpdateCompany from "./UpdateCompany";
import Productinfo from "./Productinfo";
import { AddproductFrom } from "./AddProductForm";
import useUsers from "./useUsers";

const { Header, Footer } = Layout;
const Container = styled.div`
  float: center;
  align-items: center;
  justify-content: space-around;
  display: block;
  padding-bottom: 5.5rem;
`;

const debug = debugFactory("app");
debug("debugger");

const App = () => {
  const myStyle = {
    color: "white",
  };

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
  const { addUser, loginUser, logoutUser,  whoAmI } = useUsers();
  return (
    <Router>
      <Header style={myStyle}>Waste Management System</Header>
      <Container className="container">
        <Switch>
          <LoginContext.Provider
            value={{
              isLogged,
              setIsLogged,
              name,
              setName,
              loginUser,              
              whoAmI,
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
              <Route path="/logout">log out</Route>
              <Route path="/whoami">who am I?</Route>
            </CompanyContext.Provider>
          </LoginContext.Provider>
        </Switch>
      </Container>
      <Footer className="footer">written by Masoud Zare</Footer>
    </Router>
  );
};

export default App;
