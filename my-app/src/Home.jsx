import React from 'react';
import helloworld_en from './defaults'

const Home = () => {
    const buttonTxt = "Increment";
    const add = (a, b) => { return a + b; }
    return (
        <div style={{backgroundColor: 'grey'}}>
            <h1>{ helloworld_en }</h1>
            <button>{ buttonTxt }</button>
        </div>
        );
}
 
export default Home;