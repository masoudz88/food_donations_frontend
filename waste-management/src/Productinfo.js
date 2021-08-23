import { Button, Divider, List } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { CompanyContext } from "./Contexts/CompanyContext";
import { Link, useParams } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

const Productinfo = (props) => {
  const { companies, products, setProducts, fetchProducts, deleteProduct } =
    useContext(CompanyContext);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const { companyId } = useParams();

  useEffect(() => {
    const foundCompany = companies.find((c) => c.name === companyId);
    setSelectedCompany(foundCompany);
    fetchProducts(foundCompany.id);
    console.log(products);
  }, [companies, companyId, setProducts, fetchProducts]);

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
                <Button type="link">{item.name}</Button>
                <Button
                  onClick={() => {
                    deleteProduct(selectedCompany.id,item.id);
                  }}
                  danger
                >
                  <DeleteOutlined />
                </Button>
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Productinfo;
