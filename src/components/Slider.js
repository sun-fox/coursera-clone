import React from 'react'
import julio from '../images/julio.png';
import kara from '../images/kara.png';
import sabrina from '../images/sabrina.png';
import mirela from '../images/mirela-decorative.png';
import '../css/style.css';
import '../css/slick-theme.css';
function Slider() {
    return (
        <div class =" container text-center" style={{overflowX:"hidden"}}>
            <div class="responsive">
                <div class ="card" style ={{padding:"10px"}}>
                    <div class =""><img src ={julio} alt=""/></div>
                    <div class ="caption text-center">
                        <h3>Julio</h3>
                        <p>FrontEnd Developer</p>
                    </div>
                </div>
                <div class ="card" style ={{padding:"10px"}}>
                    <div class =""><img src ={kara} alt=""/></div>
                    <div class ="caption text-center">
                        <h3>Kara</h3>
                        <p>Backend Developer</p>
                    </div>
                </div>
                <div class ="card" style ={{padding:"10px"}}>
                    <div class =""><img src ={sabrina} alt=""/></div>
                    <div class ="caption text-center">
                        <h3>Sabrina</h3>
                        <p>Public Relations Head</p>
                    </div>
                </div>
                <div class ="card" style ={{padding:"10px"}}>
                    <div class =""><img src ={mirela} alt=""/></div>
                    <div class ="caption text-center">
                        <h3>Mirela</h3>
                        <p>Corporate Affairs Head</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
