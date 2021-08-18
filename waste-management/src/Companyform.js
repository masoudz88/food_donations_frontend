import React, { useContext, useState } from "react";
import { Input, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { CompanyContext } from "./Contexts/CompanyContext";

const { Content } = Layout;
export const Companyform = () => {
  const { setCompanies } = useContext(CompanyContext);
  const [value, setValue] = useState([]);

  const onChange = (event, companyID) => {
    setValue({ name: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    fetch("/api/companies/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }).then((res) => {
      if (res.ok) {
        fetch("/api/companies/")
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((jsonResponse) => setCompanies(jsonResponse));
      }
    });
  };
  return (
    <div className="companyform">
      <Content>
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
              alert(value.name + " added");
            }}
          >
            add
          </Button>
        </form>
      </Content>
    </div>
  );
};
