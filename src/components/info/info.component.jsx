import React from "react";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.jpg"
import photo from "../../assets/me.jpg"
import "./info.styles.css"


function Info(){
    return(
        <div className="info">

            <img src={photo} alt="" />
            <div className="cent">
            <h1>Dimitris Apostolopoulos</h1>
            <h3>Junior Frontend Developer</h3>
            <p>dim.apostolopoulos95@gmail.com</p>
            </div>

            <div className="buttons">

                <a href="https://github.com/dimisap" rel="noreferrer"><button class='btn btn-light'><img src={github} className='github-img' alt="" /> Email</button></a>
                <a href="https://www.linkedin.com/in/dimitris-apostolopoulos-9847a1172/" rel="noreferrer" target='_blank'><button class='btn btn-outline-primary'><img src={linkedin} alt="" /> LinkedIn</button></a>
            </div>
        </div>

    )
}


export default Info;