import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import {DeleteOutlined} from '@ant-design/icons';
import { Button } from "antd";
import { CompanyContext } from './Contexts/CompanyContext';

const CompanyCards = (props) => {
  const {companies, setCompanies} = useContext(CompanyContext);
  
  const handleDelete = (companyId) => {
    let newCompanies = { ...companies };
    newCompanies = companies.filter((c) => c.id !== companyId);
    setCompanies(newCompanies);
    console.log(newCompanies);
  };

  return (
    <div>
      <ul className="rows">
        {companies.map((co) => (
          <li style={{ paddingRight: "10px" }} key={co.id}>
            <Link to={`Mainpage/Company/${co.name}`}>
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

            <Button
              onClick={() => {
                handleDelete(co.id);
              }}
              danger
            >
              <DeleteOutlined />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyCards;
