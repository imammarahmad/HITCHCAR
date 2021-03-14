import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

const Footer = () => {

    return (
        <>
            <div className="container-xxl footer" style={{opacity: "0.8",}}>
                <div className="row" style={{ margin: "10px 0 40px 0" }}>
                    <h2 style={{
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "60px"
                    }}>About Us</h2>
                    <div className="col-lg-2" >
                        <h4>Hitch Car</h4>
                    </div>
                    <div className="col-sm-2 footer-comps">
                        <h5>What Do We Do </h5>
                        <p>How it works</p>
                        <p>Where it works</p>
                    </div>
                    <div className="col-sm-2" style={{ width: "100%", textAlign: "center" }}>
                        <h5>Team Members</h5>
                        <p>Saad</p>
                        <p>Ammar</p>
                        <p>Sheikh</p>
                        <p>Ameer</p>
                    </div>
                    <div className="col-lg-2" style={{ width: "100%", textAlign: "center" }}>
                        <h5>Apps</h5>
                        <p>Web App</p>
                        <p>Mobile App</p>
                    </div>
                    <div className="col-sm-2" style={{ width: "100%", textAlign: "center" }}>
                        <h5>Technologies</h5>
                        <p>ReactJS</p>
                        <p>Firebase</p>
                    </div>
                    <div className="col-sm-2" style={{ width: "100%", textAlign: "center" }}>
                        <h5>Like us</h5>
                        <span style={{marginLeft: "60px"}}><FacebookIcon/></span>
                        <br /><br />
                        <span style={{marginLeft: "60px"}}><GitHubIcon/></span>
                        <br /><br />
                        <span style={{marginLeft: "60px"}}><LinkedInIcon/></span>
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: "#f7f7f7", opacity: "1" }}>
                    <h5>@ 2021 Hitch Car. All rights reserved. </h5>
                </div>
            </div>
        </>
    );

}

export default Footer;