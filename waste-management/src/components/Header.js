import Button from "./Button"


const Header = ({title}) => { 
    const onClick=()=>{
        console.log("clicked")
    }   
    return (
        <header className="header">
            <h1 >{title}</h1>            
             <Button color="green" text="Log In" onClick={onClick}/>
             <Button color="blue" text="sign up"/>             
        </header>
        
    )
}

Header.defaultProps={
    title: "Waste Management System",
}



export default Header
