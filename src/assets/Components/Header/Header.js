import React from 'react'
import "./Header.css"
import myphoto from "./IMG_6562.png"
import Typical from 'react-typical'
const Header = () => {
    return (
        <div className='header'>
            <div>
                <h2>welcome to my website</h2><br/>
                <h3>Iam a </h3><br/>
                <Typical steps={[
                    `Full Stack Developer`, 1000, `Web Designer`, 1000, `Freelancer`, 1000,`Java Devoloper`, 1000,`React Devoloper`, 1000]}
                    loop={Infinity}/>
                </div>
                <img className='i' src={myphoto} alt="My Photo"/>
            
        </div>
    )
}

export default Header