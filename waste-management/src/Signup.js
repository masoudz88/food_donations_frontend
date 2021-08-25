import { Input } from "antd";
import { Button } from "antd";
import { Layout, Form } from "antd";
import { useState } from "react";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onUserNameInputChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };
  const onPasswordInputChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const onSubmit = (e) => {
    alert("Submited!");
    fetch("/api/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username, password }),
    }).then((res) => {
      if (res.ok) {
        fetch("/api/users/")
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((jsonResponse) => setUsername(jsonResponse));
      }
    });
  };

  return (
    <div className="firstpage">
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              sign up
            </Button>
          </Form.Item>
        </Form>
      </Layout>
    </div>
  );
};

export default Signup;
