import React from 'react'
import '../css/style.css';
import illinois from '../images/illinois.png';
import imperial from '../images/imperial.png';
import duke from '../images/duke.png';
import google from '../images/google.png';
import ibm from '../images/ibm.png';
import umich from '../images/umich.jpg';
import penn from '../images/penn.png';
import stanford from '../images/stanford.png';
function Collaborator() {
    return (
        <div class ="container-fluid collaborator">
            <div class ="row text-center">
                <div class ="col-md-12 col-sm-12">
                    <p>We collaborate with <u>190+ leading universities and companies</u></p>
                </div>
                <div class ="col-md-12 col-sm-12">
                    <div class ="container">
                        <div class ="row text-center">
                            <div class ="col-md-12">
                                <img src ={illinois} alt=""/>
                                <img src ={duke} alt=""/>
                                <img src ={google} alt=""/>
                                <img src ={umich} alt=""/>
                                <img src ={ibm} alt=""/>
                                <img src ={imperial} alt=""/>
                                <img src ={stanford} alt=""/>
                                <img src ={penn} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Collaborator
