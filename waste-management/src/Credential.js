import { Link } from "react-router-dom";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { Layout } from "antd";
import { username, password as validPassword } from "./ValidCredentials";
import { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";

// const validCredentials = require('./ValidCredentials');

const { Header, Footer, Content } = Layout;

/*const MyInput = styled(Input)`
  font-size: 14px;
`;*/

const Credential = () => {
  const { name, password, setName, setPass } = useContext(LoginContext);
  const myStyle = {
    color: "white",
  };
  console.log(name, password);

  const onChangeSearch = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + name);
    event.preventDefault();
  };
  const myClick = (e) => {
    if (name === username && password === validPassword) {
      console.log("hi");
    }
  };
  const buttonDisable = name !== "masoud" || password !== "zare";
  return (
    <div className="firstpage">
      <Header style={myStyle}>Waste Management System</Header>
      <Content className="content">
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="input username"
            value={name}
            onChange={(Event) => onChangeSearch(Event)}
          />
          <Input.Password
            placeholder="input password"
            value={password}
            onChange={(Event) => setPass(Event.target.value)}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Link to="./Mainpage">
            <Button disabled={buttonDisable} type="primary" onClick={myClick}>
              log in
            </Button>
          </Link>
          <Button type="primary">sign up</Button>
        </form>
      </Content>
      <Footer>written by Masoud Zare</Footer>
    </div>
  );
};

export default Credential;
