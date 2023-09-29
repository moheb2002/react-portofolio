import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
    <nav>
        <div className="logo">
            <h2 style={{padding:20,color:"black"}}>MOHEB</h2>
        </div>
            <ul style={{padding:20}}>
                <li><a href='/Home'>Home</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/portofolio'>Contact Me</a></li>
            </ul>
    </nav>
    )
}

export default Navbar