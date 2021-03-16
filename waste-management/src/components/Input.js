import {useState} from "react"
const Input = ({title}) => {
    const [password, setPass] = useState("" )
    const [username, setUser] = useState("" )
    return (
        <form className="form-control">
            <h1 >{title}</h1>
            <div>
            <label>Password</label>
            <input type="text" value={password} 
            onChange={(e)=>setPass(e.target.value)}></input>
            </div>
            <div>
            <label>User Name</label>
            <input type="text" value={username} 
            onChange={(e)=>setUser(e.target.value)}></input>
            </div>
        </form>
    )
}

export default Input
Input.defaultProps={
    title: "Waste Management System",
}