import React, { useContext, useState } from "react";
import { Input, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { CompanyContext } from "./Contexts/CompanyContext";

const { Content } = Layout;
export const Companyform = () => {
  const { companies, addCompany } = useContext(CompanyContext);
  const [value, setValue] = useState([]);

  const onChange = (event, companyID) => {
    setValue({ id: 10, name: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newCompany = [...companies];
    newCompany.push(value);
    addCompany(newCompany);
    console.log(newCompany);
  };
  return (
    <div>
      <Content className="content">
        <Link to="/Mainpage">
          <Button type="default">Go Back</Button>
        </Link>
        <form onSubmit={onSubmit}>
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
              alert("company added");
            }}
          >
            add
          </Button>
        </form>
      </Content>
    </div>
  );
};
