import React, { useContext, useState } from "react";
import { Input, Button, Layout } from "antd";
import { Link, useParams } from "react-router-dom";
import { CompanyContext } from "./Contexts/CompanyContext";
import Form from "antd/lib/form/Form";

const UpdateCompany = (companyID) => {
  const { updateCompany } = useContext(CompanyContext);
  const [value, setValue] = useState([]);
  const { id } = useParams();
  const { Content } = Layout;

  const onChange = (event) => {
    setValue({ name: event.target.value });
  };

  const onSubmit = (event) => {
    alert("company updated");
    updateCompany(value, id);
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

          <Button htmlType="submit" type="primary">
            update
          </Button>
        </Form>
      </Content>
    </div>
  );
};

export default UpdateCompany;
