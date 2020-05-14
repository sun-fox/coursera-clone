import React from 'react';
import '../css/style.css'
import SvgaLearn from '../images/SvgaLearn.png';
import teacherimg from '../images/teacher-img.png';
import SvgaColorCertificate from '../images/SvgaColorCertificate.png';
import SvgaCommunity from '../images/SvgaCommunity.png';
function Features() {
    return (
        <div class ="container-fluid features">
            <div class ="row text-center">
                <div class ="col-md-12 col-sm-12">
                    <h1 id="amitfeaturehead">Achieve your goals with Coursera</h1>
                </div>
            </div><br/><br/>
            <div class ="container">
                <div class ="row text-center">
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={SvgaLearn} alt =""/>
                            <h3>Learn the latest skills</h3>
                            <p>like business analytics, graphic design, Python, and more</p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={teacherimg} alt =""/>
                            <h3>Get ready for a career</h3>
                            <p>in high-demand fields like IT, AI and cloud engineering</p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={SvgaColorCertificate} alt =""/>
                            <h3>Earn a certificate or degree</h3>
                            <p>from a leading university in business, computer science, and more</p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={SvgaCommunity} alt =""/>
                            <h3>Upskill your organization</h3>
                            <p>with on-demand training and development programs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
