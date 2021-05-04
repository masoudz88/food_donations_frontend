import { Link, Redirect } from "react-router-dom";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { Layout } from "antd";
import {
  username as validUsername,
  password as validPassword,
} from "./ValidCredentials";
import { useContext, useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";

// const validCredentials = require('./ValidCredentials');

const { Header, Footer, Content } = Layout;

/*const MyInput = styled(Input)`
  font-size: 14px;
`;*/

const Credential = () => {
  const { name, setName } = useContext(LoginContext);
  const [username, setUsername] = useState("");

  const myStyle = {
    color: "white",
  };
  console.log(name);

  const onUserNameInputChange = (event) => {
    const { value } = event.target;
    console.log("input:", value);
    setUsername(value);
  };

  const onSubmit = (e) => {
    // TODO: implement user/pass checking again
    console.log("submit clicked");
    setName(username);
    
    // TODO: redirect using router
    
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
          <Button type="submit" value="Login">
            log in
          </Button>
          <Button type="primary">sign up</Button>
        </form>
      </Content>
      <Footer>written by Masoud Zare</Footer>
    </div>
  );
};

export default Credential;
