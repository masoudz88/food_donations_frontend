import React from 'react'


const Landingpage = () => {
    return (
        <div >
          <div className="landingpage"
  style={{
    background: `url('${process.env.PUBLIC_URL}/logos/donations.jpg')`,    
    height: "100vh",  
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',    
    
  }}
>
    <h1 className="heading">Help the poverty</h1>
</div>
        </div>
    )
}
export default Landingpage;
