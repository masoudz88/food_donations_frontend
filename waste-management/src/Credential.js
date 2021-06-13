import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { Layout } from "antd";
import { username as validUsername } from "./ValidCredentials";
import { useContext, useState, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";

// const validCredentials = require('./ValidCredentials');

const { Content } = Layout;

/*const MyInput = styled(Input)`
  font-size: 14px;
`;*/

const Credential = (props) => {
  const [name, setName] = useState("");
  const { isLogged, setIsLogged } = useContext(LoginContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // TODO: if local storage has username, restore username from localStorage and redirect to mainpage

    console.log("after", localStorage.getItem("username"));
    if (localStorage.getItem("username") === "masoud") {
      setName(localStorage.getItem("username"));
    }
  }, [name]);

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
    if (name === validUsername) {
      setIsLogged(true);
      console.log(isLogged);
      props.history.push("/Mainpage");
    }
    //props.history.push("/Mainpage");
  };

  return (
    <div className="firstpage">
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
    </div>
  );
};

export default Credential;
