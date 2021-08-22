import React, { useContext, useState } from "react";
import { Input, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { CompanyContext } from "./Contexts/CompanyContext";
import Form from "antd/lib/form/Form";

const { Content } = Layout;
export const Companyform = () => {
  const { addCompany } = useContext(CompanyContext);
  const [value, setValue] = useState([]);

  const onChange = (event, companyID) => {
    setValue({ name: event.target.value });
  };

  const onSubmit = (event) => {
    addCompany(value);
  };
  return (
    <div className="companyform">
      <Content>
        <Link to="/Mainpage">
          <Button type="default">Go Back</Button>
        </Link>
        <Form onFinish={onSubmit}>
          <Input
            className="input"
            style={{ marginTop: "40px", marginBottom: "40px" }}
            placeholder="Company Name"
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
