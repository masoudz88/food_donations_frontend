import React, { useContext, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { LoginContext } from "./Contexts/LoginContext";
import { CompanyContext } from "./Contexts/CompanyContext";

const Credential = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setName } = useContext(LoginContext);
  const { loginUser } = useContext(CompanyContext);

  const onUserNameInputChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };
  const onPasswordInputChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const onSubmit = (e) => {
    // const foundUser = users.find(
    //   (c) => c.name === username && c.password === password
    // );
    setName(username);
    loginUser(username, password);
  };

  return (
    <div>
      <Layout className="firstpage">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input onChange={(Event) => onUserNameInputChange(Event)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(Event) => onPasswordInputChange(Event)}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
            <Link to="/Signup">
              <Button style={{ marginLeft: "2%" }}>Sign Up</Button>
            </Link>
          </Form.Item>
        </Form>
      </Layout>
    </div>
  );
};

export default Credential;
