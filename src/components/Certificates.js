import React from 'react'
import certi4 from '../images/certificates4.png';
import '../css/style.css';
function Certificates() {
    return (
        <div class ="container Certificates">
            <div class ="row">
                <div class ="col-md-6">
                    <br/><br/>
                    <img id ="mobileimg"src ={certi4} alt =""/>
                </div>
                <div class ="col-md-5 col-sm-12">
                    <div class ="Certificates-con-box" style ={{marginTop:"30%"}}>
                    <p style ={{color:"grey"}}><b>SHAREABLE CERTIFICATES</b></p>
                    <p style ={{fontSize:"25px"}}>Earn industry-recognized credentials</p>
                    <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                    <p style ={{fontSize:"17px"}}>Demonstrate your new skills by sharing your Course <b>Certificate, Professional Certificate, MasterTrack™ Certificate</b>, or diploma with your network.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificates
