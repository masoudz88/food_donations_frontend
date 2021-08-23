import React, { useContext, useState, useEffect } from "react";
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
  const [selectedCompany, setSelectedCompany] = useState(null);

  const onChange = (event, companyID) => {
    setValue({ name: event.target.value });
  };

  const onSubmit = (event) => {
    addProduct(value);
  };
  useEffect(() => {
    const foundCompany = companies.find((c) => c.name === companyName);
    setSelectedCompany(foundCompany);
    addProduct(foundCompany.id);
  }, [companies, companyName, addProduct]);
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

          <Button
            htmlType="submit"
            type="primary"
            onClick={() => {
              alert(value.name + " added");
            }}
          >
            add
          </Button>
        </Form>
      </Content>
    </div>
  );
};
