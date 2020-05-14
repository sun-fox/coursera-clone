import React from 'react'
import '../css/style.css';
import loreal from '../images/loreal.svg';
import novartis from '../images/novartis.svg';
import accelya from '../images/accelya.svg';
import axa from '../images/axa.svg';
import axisbank from '../images/axisbank.svg';
import pandg from '../images/pandg.svg';
import sk from '../images/sk.svg';
import tata from '../images/tata.svg';
import danone from '../images/danone.png';
import telenor from '../images/telenor.png';
import airbus from '../images/airbus.svg';
function Bussiness() {
    return (
        <div class ="container-fluid Bussiness" style ={{padding:"50px"}}>
            <div class ="row">
                <div class ="col-md-2 col-sm-12"></div>
                <div class ="col-md-5 col-sm-12">
                    <p id="coursesheading"><span id="boldtext">2000+</span>Coursera for Business customers</p>
                    <div class ="row text-center">
                        <div class ="col-md-12">
                        <img  id="mobilesponsorimg"src ={loreal} alt=""  />
                        <img  id="mobilesponsorimg"src ={pandg} alt=""  />
                        <img  id="mobilesponsorimg"src ={novartis} alt=""  />
                        <img  id="mobilesponsorimg"src ={telenor} alt=""  />
                        <img  id="mobilesponsorimg"src ={airbus} alt=""  />
                        <img  id="mobilesponsorimg"src ={axisbank} alt=""  />
                        <img  id="mobilesponsorimg"src ={accelya} alt=""  />
                        <img  id="mobilesponsorimg"src ={tata} alt=""  />
                        <img  id="mobilesponsorimg"src ={axa} alt=""  />
                        <img  id="mobilesponsorimg"src ={danone} alt=""  />
                        <img  id="mobilesponsorimg"src ={sk} alt=""  />
                        </div>
                    </div>
                </div>
                <div class ="col-md-4 col-sm-12">
                    <div>
                        <h2><b>Coursera for Business</b></h2>
                        <p style ={{fontSize:"18px"}}>We’ve got the solution: world-class training and development programs developed by top universities and companies. All on Coursera for Business.</p>
                        <button style ={{border:"1px solid #2a73cc",color:"#2a73cc",padding:"10px",cursor:"pointer",backgroundColor:"#ffff"}}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bussiness
