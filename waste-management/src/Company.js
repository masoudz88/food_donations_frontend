import React, { useState, useEffect } from "react";
import companyList from "./companyList.json";
import { Col, Row, Button } from "antd";

const Company = (props) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(companyList);
  }, [setCompanies]);
  console.log(companies);

  return (
    <div>
      <ul>
        {companies.map((co) => (
          <li>
            <Button type="link">{co.name}</Button>
            <img alt={co.name} src={`${co.image}`} width="100%" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
