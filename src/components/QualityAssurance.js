import React from 'react'
import andrew from '../images/andrewng.png';
import '../css/style.css';
function QualityAssurance() {
    return (
        <div class ="container-fluid QualityAssurance">
            <div class ="row text-center">
                <div class ="col-md-12 col-sm-12">
                <br/>
                    <h1 id="heading">World-class learning for anyone, anywhere</h1>
                </div>
            </div><br/>
            <div class ="row">
                <div class ="col-md-2 col-sm-12"></div>
                <div class ="col-md-3 col-sm-12">
                    <div class ="QualityAssurance-text-box">
                    <br/>
                        <p style ={{color:"grey"}}>TOP QUALITY</p>
                        <p style={{fontSize:"25px"}} >Learn from leading <br/>universities and companies</p>
                        <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                        <p style={{fontSize:"26px;",lineHeight:"2"}}>Start streaming on-demand video lectures today from top instructors in subjects like <b>business, computer science, data science, language learning</b>, & more.
                        </p>
                    </div>
                </div>
                <div class ="col-md-7 col-sm-12">
                    <img id="mobileimg" src ={andrew} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default QualityAssurance
