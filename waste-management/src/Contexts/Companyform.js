import React, { useState, useEffect } from "react";
import { Input, Button, Layout } from "antd";
import companyList from "../companyList.json";

const { Content } = Layout;
export const Companyform = () => {
  const [company, addCompany] = useState({});
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("here", company);
    addCompany(companyList);
  }, [company]);
  const onChange = (e) => {
    const { changeValue } = e.target;
    setValue(changeValue);
  };

  const onSubmit = () => {
    let newCompanies = { ...company };
    newCompanies = company.push(value);
    addCompany(newCompanies);
  };
  return (
    <div>
      <Content className="content">
        <form onSubmit={onSubmit}>
          <Input
            style={{ marginTop: "40px", marginBottom: "40px" }}
            placeholder="Company Name"
            onChange={onChange}
          />
          <Button htmlType="submit" type="primary">
            add
          </Button>
        </form>
      </Content>
    </div>
  );
};