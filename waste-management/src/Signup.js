import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { Layout } from "antd";
import { useState } from "react";
import debugFactory from "debug";

const { Content } = Layout;
const debug = debugFactory("signup");

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  debug(username, password);
  const onUserNameInputChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };
  const onPasswordInputChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(username, password),
    }).then((jsonResponse) => {
      setUsername(jsonResponse);
    });
  };

  return (
    <div className="firstpage">
      <Content className="content">
        <form onSubmit={onSubmit}>
          <Input
            className="signup"
            placeholder="input username"
            onChange={(Event) => onUserNameInputChange(Event)}
          />
          <Input.Password
            className="signup"
            placeholder="input password"
            onChange={(Event) => onPasswordInputChange(Event)}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button className="button" type="primary">
            sign up
          </Button>
        </form>
      </Content>
    </div>
  );
};

export default Signup;
