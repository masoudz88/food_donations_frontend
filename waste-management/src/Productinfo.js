import { Button, Divider, List, Typography } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { CompanyContext } from "./Contexts/CompanyContext";
import { Link, useParams } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

const Productinfo = (props) => {
  const { companies, products, fetchProducts, deleteProduct } =
    useContext(CompanyContext);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const { companyId } = useParams();
  console.log(products);
  const{Text}=Typography;

  useEffect(() => {
    const foundCompany = companies.find((c) => c.name === companyId);
    setSelectedCompany(foundCompany);
    fetchProducts(foundCompany.id);
  }, [companies, companyId, fetchProducts]);

  return (
    <div>
      {!selectedCompany && "Loading..."}
      {selectedCompany && (
        <div className="productList">
          <Divider>
            <h1>{`${selectedCompany.name} Products`}</h1>
          </Divider>
          <Link to="/Mainpage">
            <Button style={{ marginBottom: "24px" }} type="primary">
              Go Back
            </Button>
          </Link>
          <List
            header={<div>Product List</div>}
            bordered
            dataSource={products}
            renderItem={(item) => (
              <List.Item className="listItem">
                <Text type="link">{item.name}</Text>
                <Button
                  onClick={() => {
                    deleteProduct(selectedCompany.id, item.id);
                  }}
                  danger
                >
                  <DeleteOutlined />
                </Button>
              </List.Item>
            )}
          />
          <Link to={`/Mainpage/company/${selectedCompany.name}/AddProductForm`}>
            <Button className="button">Add New Products</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Productinfo;
