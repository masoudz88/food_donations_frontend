import React from 'react'
import LandingNav from './navbar/LandingNav';

const Landingpage = () => {
    return (
        <div >
          <LandingNav/>
          <div className="landingpage"
  style={{
    background: `url('${process.env.PUBLIC_URL}/logos/donations.jpg')`,    
    height: "100vh",  
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',    
    
  }}
>
    <h1 className="heading">
     You are the solution,<br/> to the problem of hunger in the classroom</h1>
</div>
        </div>
    )
}
export default Landingpage;
