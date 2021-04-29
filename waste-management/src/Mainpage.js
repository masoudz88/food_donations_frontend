import { useContext } from "react";
import { LoginContext } from "./Contexts/LoginContext";

const Mainpage = () => {
  const { name } = useContext(LoginContext);
  console.log(name);
  return (
    <div>
      <h1>name: {name}</h1>
    </div>
  );
};

export default Mainpage;
