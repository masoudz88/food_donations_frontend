const Button = ({ color, text, onClick}) => {
    return (
        <div>
            <button style={{backgroundColor: color}} 
            className="btn" onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button
