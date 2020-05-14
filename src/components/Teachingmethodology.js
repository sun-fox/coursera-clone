import React from 'react'
import quiz from '../images/quizCompletion.png';
import '../css/style.css';
function Teachingmethodology() {
    return (
        <div class ="container-fluid Teachingmethodology">
           
            <div class ="row">
                <div class ="col-md-2 col-sm-12"></div>
                <div class ="col-md-3 col-sm-12">
                    <div class ="QualityAssurance-text-box">
                    <br/>
                        <p style ={{color:"grey"}}>APPLIED LEARNING</p>
                        <p style={{fontSize:"25px"}} >Master skills with in-depth learning</p>
                        <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                        <p style={{fontSize:"26px;",lineHeight:"2"}}>Apply what you learn with<b> self-paced quizzes and hands-on projects.</b> Get feedback from a global community of learners.


                        </p>
                    </div>
                </div>
                <div class ="col-md-7 col-sm-12">
                    <img id="mobileimg" src ={quiz} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Teachingmethodology
