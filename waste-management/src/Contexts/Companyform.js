import React, { useState, useEffect } from "react";
import { Input, Button, Layout } from "antd";
import companyList from "../companyList.json";
import { Link } from "react-router-dom";

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
    console.log("there", company);
    console.log("there", newCompanies);
  };
  return (
    <div>
      <Content className="content">
        <Link to="/Mainpage">
          <Button type="primary">Go Back</Button>
        </Link>
        <form onSubmit={onSubmit}>
          <Input
            className="input"
            style={{ marginTop: "40px", marginBottom: "40px" }}
            placeholder="Company Name"
            onChange={onChange}
          />
          <Link to="/Mainpage">
            <Button
              htmlType="submit"
              type="primary"
              onClick={() => {
                alert("company added");
              }}
            >
              add
            </Button>
          </Link>
        </form>
      </Content>
    </div>
  );
};
