import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import { CompanyContext } from "./Contexts/CompanyContext";

const CompanyCards = () => {
  const { companies, setCompanies } = useContext(CompanyContext);
  console.log("before", companies);

  const handleDelete = async (companyId) => {
    const requestOptions = {
      method: "DELETE",
    };

    await fetch("/api/companies/" + companyId, requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setCompanies(jsonResponse));
  };

  return (
    <div>
      <List
        className="list"
        header={<div>Company List</div>}
        bordered
        dataSource={companies}
        renderItem={(item) => (
          <List.Item className="listItem">
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
