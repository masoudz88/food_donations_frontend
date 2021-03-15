
const Header = () => {
    const onClick=()=>{
        console.log("clicked")
    }
    return (
        <header className="header">
            <h1 >Waste Management System</h1>            
            <button className="btn" onClick={onClick}>Log in</button>
            <button className="btn">Sign up</button>
        </header>
    )
}

export default Header
