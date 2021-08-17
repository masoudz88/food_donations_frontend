import { Button, Divider } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { CompanyContext } from "./Contexts/CompanyContext";
import { Layout, Menu } from "antd";
import { Link, useParams } from "react-router-dom";

const CompanyInfo = (props) => {
  const { companies, products, setProducts, fetchProducts } = useContext(CompanyContext);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const { companyId } = useParams();
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;

  useEffect(() => {   
    const foundCompany = companies.find((c) => c.name === companyId);
    setSelectedCompany(foundCompany);
    fetchProducts(foundCompany.id);
  }, [companies, companyId, setProducts, fetchProducts]);

  return (
    <div>
      {!selectedCompany && "Loading..."}
      {selectedCompany && (
        <div>
          <Divider>
            <h1>{`${selectedCompany.name} Products`}</h1>
          </Divider>
          <Link to="/Mainpage">
            <Button style={{ margin: "24px" }} type="primary">
              Go Back
            </Button>
          </Link>
          <Content style={{ padding: "0 50px" }}>
            <Layout
              className="site-layout-background"
              style={{ padding: "24px 0" }}
            >
              <Sider className="site-layout-background" width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                >
                  <SubMenu key="sub1" title="Items">
                    {products.map((product) => (
                      <Menu.Item key={product.id}>{product.name}</Menu.Item>
                    ))}
                  </SubMenu>
                </Menu>
              </Sider>
            </Layout>
          </Content>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
