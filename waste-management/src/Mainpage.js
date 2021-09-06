import { Divider, Button } from "antd";
import CompanyCards from "./CompanyCards";
import { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import "./index.css";
import { Link } from "react-router-dom";
import debugFactory from "debug";
import { Layout } from "antd";

const debug = debugFactory("Mainpage");

const Mainpage = (props) => {
  const { name } = useContext(LoginContext);
  const { Header } = Layout;
  debug(name);

  //debug(currentUser);
  // const onClick = () => {
  //   logoutUser(props);
  // };
  // const profileClick = () => {
  //   props.history.push("/profile");
  // };

  // const menu = (
  //   <Menu>
  //     <Menu.Item onClick={profileClick} key="0">
  //       My Profile
  //     </Menu.Item>
  //     <Menu.Divider />
  //     <Menu.Item onClick={onClick} danger key="1">
  //       Log Out
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <div className="mainpage">
      <Layout className="layout">
        <Header className="header">
          <div className="logo" />
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
