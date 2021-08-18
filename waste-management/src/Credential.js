import { Form, Input, Button, Checkbox } from 'antd';
import { Layout } from "antd";
import { useContext, useState, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import debugFactory from "debug";
import {Link} from "react-router-dom";



const debug = debugFactory("credential");

const Credential = (props) => {
  const { name, setName, isLogged, setIsLogged } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  

  useEffect(() => {
    // TODO: if local storage has username, restore username from localStorage and redirect to mainpage

    debug("after", localStorage.getItem("username"));
    if (localStorage.getItem("username") === "masoud") {
      setName(localStorage.getItem("username"));
    }
  }, [name, setName]);

  const onUserNameInputChange = (event) => {
    const { value } = event.target;
    debug("input:", value);
    setUsername(value);
  };

  const onSubmit = (e) => {
    // TODO: implement user/pass checking again
    // if (name === "masoud" && password === "zare") {
    debug("submit clicked");
    setName(username);
    localStorage.setItem("username", username);
    debug("before", localStorage.getItem("username"));
    // }
    
    // TODO: redirect to mainpage after successful login
    if (name === "masoud") {
      setIsLogged(true);
      debug(isLogged);
      props.history.push("/Mainpage");
    }
    //props.history.push("/Mainpage");
  };

  return (
    
      <div >
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
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input onChange={(Event) => onUserNameInputChange(Event)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
        <Link to="/Signup">
        <Button style={{marginLeft:"2%"}}>Sign Up</Button>
        </Link>
      </Form.Item>
    </Form>        
    </Layout>
      </div>
    
  )
};

export default Credential;
