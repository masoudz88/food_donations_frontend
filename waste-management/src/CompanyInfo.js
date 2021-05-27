import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import companyList from "./companyList.json";
import productList from "./productList.json";
import { Button } from "antd";

const CompanyInfo = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const urlId = "1"; // TODO: get id from URL
    const foundCompany = companyList.find((c) => c.id === urlId);

    setSelectedCompany(foundCompany);
    setProducts(productList);
  }, [products]);

  return (
    <div>
      {!selectedCompany && "Loading..."}
      {selectedCompany && (
        <div>
          <h1>{`${selectedCompany.name} Products`}</h1>
          {products.map((product) => (
            <li>{product.product}</li>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
