import React from 'react'
import Slider from './Slider'

function Community() {
    return (
        <div class ="container-fluid Community" >
            <div class ="row text-center">
                <div class ="col-md-12">
                    <div style ={{marginTop:"9%"}}>
                    <h2><b>From the Coursera community</b></h2>
                    <h3 style ={{color:"grey"}} id="subheading">45+ million people are already learning on Coursera</h3>
                    </div>
                </div>
            </div>
            <Slider/>
        </div>
    )
}

export default Community
