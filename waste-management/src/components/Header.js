import Button from "./Button"


const Header = () => { 
    const onClick=()=>{
        console.log("clicked")
    }   
    return (
        <header className="header">
                        
             <Button color="green" text="Log In" onClick={onClick}/>
             <Button color="blue" text="sign up"/>             
        </header>
        
    )
}





export default Header
