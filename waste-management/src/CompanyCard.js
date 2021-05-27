import React, { useEffect, useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import { Link } from "react-router-dom";
import companyList from "./companyList.json";
import { Button } from "antd";

const CompanyCard = (props) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    console.log(companies);
    setCompanies(companyList);
  }, []);

  const handleDelete = (companyId) => {
    let newCompanies = { ...companies };
    newCompanies = companies.filter((c) => c.id !== companyId);
    setCompanies(newCompanies);
    console.log(newCompanies);
  };

  return (
    <div>
      <ul>
        {companies.map((co) => (
          <li key={co.id}>
            <Link to="Mainpage/Products">
              <Button
                onClick={() => {
                  // TODO: redirect to company URL
                  console.log("here");
                }}
                type="link"
              >
                {co.name}
              </Button>
            </Link>
            <img alt={co.name} src={`${co.image}`} width="100%" />
            <Button
              onClick={() => {
                handleDelete(co.id);
              }}
              danger
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyCard;
