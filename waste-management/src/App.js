import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div className="container">
      <Layout>
        <Header>Header</Header>
        <Content>
          <Space direction="vertical">
            <Input.Password placeholder="input password" />
            <Input.Password
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <Button type="primary">log in</Button>
            <Button type="primary">sign up</Button>
          </Space>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default App;
