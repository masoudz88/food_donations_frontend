import React, { useContext,useState} from "react";
import { Input, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { CompanyContext } from './CompanyContext';

const { Content } = Layout;
export const Companyform = () => {
  const {companies, setCompanies} = useContext(CompanyContext);
  const [value, setValue] = useState(""); 

  const onChange=(event=>{    
    setValue({id:4,name:event.target.value})
  }) 

  const onSubmit = (event) => {
    event.preventDefault()
    let newCompanies = [ ...companies];
    newCompanies.push(value);
    setCompanies(newCompanies);
    console.log("there", companies);
    console.log("there", newCompanies);
  };
  return (
    <div>
      <Content className="content">
        <Link to="/Mainpage">
          <Button type="primary">Go Back</Button>
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
                alert("company added");
              }}
            >
              add
            </Button>
          
        </form>
      </Content>
    </div>
  );
};
