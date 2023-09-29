    import React from 'react'
    import "./Services.css"
    import h from "./front.PNG"
    import back from "./back.PNG"
    import desk from "./desk.PNG"
    const Services = () => {
    return (
    <div className='Services'>
        <p className='se'>My Services</p><br/>
        <div className='containe'>
            <div>
                <p className='h' id='front'>FrontEnd</p>
                <p>My Skills in This Expertise is HTML,CSS,JS</p>
                <img className='im' src={h}/>
            </div>
            <div>
            <p className='h'>BackEnd</p>
            <p>My Skills in This Expertise is Node JS,Expess</p>
            <img className='im' src={back}/>
            </div>
            <div>
            <p className='h' id='a'>Desktop Devolopement</p>
            <p>My Skills in This Expertise is Java,C++</p>
            <img className='im' src={desk}/>
            </div>
        </div>
        <br/>
    </div>
    )
}
    
export default Services;