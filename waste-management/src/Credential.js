import { Link, Redirect } from "react-router-dom";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { Layout } from "antd";
import {
  username as validUsername,
  password as validPassword,
  password,
} from "./ValidCredentials";
import { useContext, useState, useEffect, history } from "react";
import { LoginContext } from "./Contexts/LoginContext";

// const validCredentials = require('./ValidCredentials');

const { Header, Footer, Content } = Layout;

/*const MyInput = styled(Input)`
  font-size: 14px;
`;*/

const Credential = (props) => {
  const { name, setName } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const myStyle = {
    color: "white",
  };

  useEffect(() => {
    // TODO: if local storage has username, restore username from localStorage and redirect to mainpage

    console.log("after", localStorage.getItem("username"));
    if (localStorage.getItem("username") === "masoud") {
      setName(localStorage.getItem("username"));
    }
    const isLogged = !!sessionStorage.getItem("token_object");

    if (!isLogged) {
      return <Redirect to="/Credential" />;
    }
  });

  const onUserNameInputChange = (event) => {
    const { value } = event.target;
    console.log("input:", value);
    setUsername(value);
  };

  const onSubmit = (e) => {
    // TODO: implement user/pass checking again
    // if (name === "masoud" && password === "zare") {
    console.log("submit clicked");
    setName(username);
    localStorage.setItem("username", username);
    console.log("before", localStorage.getItem("username"));
    // }
    e.preventDefault();
    // TODO: redirect to mainpage after successful login
    /* if (username === "masoud" || password === "zare") {
      props.history.push("/Mainpage");
    }*/
    props.history.push("/Mainpage");
  };

  return (
    <div className="firstpage">
      <Header style={myStyle}>Waste Management System</Header>
      <Content className="content">
        <form onSubmit={onSubmit}>
          <Input
            placeholder="input username"
            onChange={(Event) => onUserNameInputChange(Event)}
          />
          <Input.Password
            placeholder="input password"
            onChange={(Event) => {}}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button htmlType="submit">log in</Button>
          <Button type="primary">sign up</Button>
        </form>
      </Content>
      <Footer>written by Masoud Zare</Footer>
    </div>
  );
};

export default Credential;
