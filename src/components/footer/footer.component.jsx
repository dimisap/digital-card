import React from "react";
import "./footer.styles.css";
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.jpg"
import facebook from "../../assets/facebook.jpg"
import linkedin from "../../assets/linkedin.jpg"
import instagram from "../../assets/instagram.jpg"


function Footer(){
    return(

        <div className="footer">
            <a href="https://twitter.com/dimisap1995" rel="noreferrer" target='_blank'><img src={twitter} alt="h" /></a>
            <a href="https://www.facebook.com/dimitris.apostolopoulos.7/" rel="noreferrer" target='_blank'><img src={facebook} alt="g" /></a>
            <a href="https://www.instagram.com/dim_ap/" rel="noreferrer" target='_blank'><img src={instagram} alt="f" /></a>
            <a href="https://www.linkedin.com/in/dimitris-apostolopoulos-9847a1172/" rel="noreferrer" target='_blank'><img src={linkedin} alt="d" /></a>
            <a href="https://github.com/dimisap" rel="noreferrer" target='_blank'><img src={github} alt="s" /></a>
        </div>
    )
}


export default Footer;