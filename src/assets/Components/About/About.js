import React from 'react'
import "./About.css"
import ima from './20230813195929_IMG_7601.png'
const About = () => {
    return (
    <div className='about'>
        <span className='ab'>About</span><br/><br/>
        <div className='about-container'>
        <div>
            <p style={{color:"white"}} className='po'>
                Hello , Iam Moheb Adel. I Study Computer Science in Eelu Univeristy with Grade B+ and Grade A in Web Technolgy and I have Cisco Cerfication in Ccna introduction to networking course
            </p>
        </div>
        <img className='h' src={ima}/>
        </div>
        <br/>
    </div>
    )
}

export default About