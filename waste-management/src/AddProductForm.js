import React, { useContext, useState } from "react";
import { Input, Button, Layout } from "antd";
import { Link, useParams } from "react-router-dom";
import { CompanyContext } from "./Contexts/CompanyContext";
import Form from "antd/lib/form/Form";

const { Content } = Layout;
export const AddproductFrom = () => {
  const { companies } = useContext(CompanyContext);
  const { addProduct } = useContext(CompanyContext);
  const [value, setValue] = useState([]);
  const { companyName } = useParams();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    alert(value + " added");
    const foundCompany = companies.find((c) => c.name === companyName);
    addProduct(value, foundCompany.id);
  };

  return (
    <div className="companyform">
      <Content>
        <Link to={`/Mainpage/company/${companyName}`}>
          <Button type="default">Go Back</Button>
        </Link>
        <Form onFinish={onSubmit}>
          <Input
            className="input"
            style={{ marginTop: "40px", marginBottom: "40px" }}
            placeholder="Product Name"
            onChange={onChange}
          />

          <Button htmlType="submit" type="primary">
            add
          </Button>
        </Form>
      </Content>
    </div>
  );
};
