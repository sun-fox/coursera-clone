import React from 'react'
import promo from '../images/promoStat.png';
import redcir from '../images/pinkish-half-circle.png';
import '../css/style.css';
function Promosec() {
    return (
        <div class="container-fluid Promosec">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="redcir"><img src={redcir} alt="" /></div>
                    <div class=""><img id="promoimg" src={promo} alt="" /></div>
                </div>
                <div class="col-md-5 col-sm-12">
                    <div class="con-box2">
                        <p id="heading">Learner outcomes on Coursera</p>
                        <p id="subheading"><b>87% of people learning </b>for professional development <b>report career benefits</b> like getting a promotion, a raise, or starting a new career</p>
                        <p>-&nbsp;Coursera Learner Outcomes Survey (2019)</p>
                        <button id="joinbtn" style={{ margin: "10px" }}>Join for Free</button>
                        <button id="trybtn" style={{ margin: "10px" }}>Try Coursera For Business</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promosec
