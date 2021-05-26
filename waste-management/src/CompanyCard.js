import React, { useContext, useEffect } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import { Link } from "react-router-dom";
import companyList from "./companyList.json";
import { Col, Row, Button } from "antd";

const CompanyCard = (props) => {
  const { companies, setCompanies } = useContext(LoginContext);
  const { setCompanyName } = useContext(LoginContext);

  useEffect(() => {
    setCompanies(companyList);
  }, [setCompanies]);

  const handleDelete = (companyId) => {
    let newCompanies = { ...companies };
    newCompanies = companies.filter((c) => c.id !== companyId);
    setCompanies(newCompanies);
    console.log(newCompanies);
  };

  const getCompanyName = (event) => {
    const value = event.target.innerText;
    setCompanyName(value);
  };

  return (
    <div>
      <ul>
        {companies.map((co) => (
          <li key={co.id}>
            <Link to="Mainpage/Products">
              <Button onClick={getCompanyName} type="link">
                {co.name}
              </Button>
            </Link>
            <img alt={co.name} src={`${co.image}`} width="100%" />
            <Button onClick={handleDelete(co.id)} danger>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyCard;
