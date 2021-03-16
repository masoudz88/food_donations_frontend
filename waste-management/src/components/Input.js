
const Input = ({title}) => {
    return (
        <form className="form-control">
            <h1 >{title}</h1>
            <div>
            <label>Password</label>
            <input type="text" placeholder="password"></input>
            </div>
            <div>
            <label>User Name</label>
            <input type="text" placeholder="username"></input>
            </div>
        </form>
    )
}

export default Input
Input.defaultProps={
    title: "Waste Management System",
}