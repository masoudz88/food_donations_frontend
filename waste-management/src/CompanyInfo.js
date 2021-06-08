import { Divider } from "antd";
import React, { useState, useEffect } from "react";
import companyList from "./companyList.json";
import productList from "./productList.json";
import { Layout, Menu } from "antd";

const CompanyInfo = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const id = window.location.pathname.split("/");
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;

  useEffect(() => {
    const urlId = id[3]; // TODO: get id from URL
    const foundCompany = companyList.find((c) => c.name === urlId);

    setSelectedCompany(foundCompany);
    setProducts(productList);
  }, [products, id]);

  return (
    <div>
      {!selectedCompany && "Loading..."}
      {selectedCompany && (
        <div>
          <Divider>
            <h1>{`${selectedCompany.name} Products`}</h1>
          </Divider>
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
                      <Menu.Item>
                        {product.product}
                      </Menu.Item>
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
