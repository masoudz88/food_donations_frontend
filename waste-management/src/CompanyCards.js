import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import { CompanyContext } from "./Contexts/CompanyContext";

const CompanyCards = (props) => {
  const { companies, setCompanies } = useContext(CompanyContext);

  const handleDelete = (companyId) => {
    let newCompanies = { ...companies };
    newCompanies = companies.filter((c) => c.id !== companyId);
    setCompanies(newCompanies);
    console.log(newCompanies);
  };

  return (
    <div>
      <List
        header={<div>Company List</div>}
        bordered
        dataSource={companies}
        renderItem={(item) => (
          <List.Item>
            <Link to={`Mainpage/Company/${item.name}`}>
              <Button
                onClick={() => {
                  // TODO: redirect to company URL
                  console.log("here");
                }}
                type="link"
              >
                {item.name}
              </Button>
            </Link>

            <Button
              onClick={() => {
                handleDelete(item.id);
              }}
              danger
            >
              <DeleteOutlined />
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CompanyCards;
