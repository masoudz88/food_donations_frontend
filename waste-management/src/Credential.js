import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const Credential = () => {
  const myStyle = {
    color: "white",
  };
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const myClick = (e) => {
    if (name === "masoud" && password === "zare") {
      console.log("hi");
    }
  };
  return (
    <div>
      <Header style={myStyle}>Waste Management System</Header>
      <Content>
        <Input
          placeholder="input username"
          onChange={(Event) => setName(Event.target.value)}
        />
        <Input.Password
          placeholder="input password"
          onChange={(Event) => setPass(Event.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <Button type="primary" onClick={myClick}>
          log in
        </Button>
        <Button type="primary">sign up</Button>
      </Content>
      <Footer>Footer</Footer>
    </div>
  );
};

export default Credential;
