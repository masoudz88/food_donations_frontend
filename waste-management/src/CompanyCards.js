import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, SettingFilled } from "@ant-design/icons";
import { Button, List } from "antd";
import { CompanyContext } from "./Contexts/CompanyContext";
import debugFactory from "debug";

const CompanyCards = () => {
  const { companies, deleteCompany } = useContext(CompanyContext);
  const debug = debugFactory("companyCards");
  debug(companies);

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
              <Button type="link">{item.name}</Button>
            </Link>
            <div style={{ float: "right" }}>
              <Link to={`Mainpage/Update/${item.id}`}>
                <Button style={{ marginRight: 20 }}>
                  <SettingFilled />
                </Button>
              </Link>
              <Button
                onClick={() => {
                  deleteCompany(item.id);
                }}
                danger
              >
                <DeleteOutlined />
              </Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CompanyCards;
