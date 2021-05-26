import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import companyList from "./companyList.json";
import productList from "./productList.json";
import { Button } from "antd";

const CompanyCard = (props) => {
  const [products, setProducts] = useState([]);
  const { companies } = useContext(LoginContext);
  const { companyName } = useContext(LoginContext);

  useEffect(() => {
    setProducts(productList);
  }, [setProducts]);

  return (
    <div>
      <h1>{`${companyName} Products`}</h1>
      {products.map((product) => (
        <li>{product.product}</li>
      ))}
      ;
    </div>
  );
};

export default CompanyCard;
