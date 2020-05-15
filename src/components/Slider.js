import React, { Component } from "react";
import julio from '../images/julio.png';
import kara from '../images/kara.png';
import sabrina from '../images/sabrina.png';
import mirela from '../images/mirela-decorative.png';
import '../css/style.css';
import '../css/slick-theme.css';
import '../css/slick.css';
import Slidr from "react-slick";

export default class Slider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div class=" container text-center" style={{ overflowX: "hidden" }}>
                <div class="responsive">
                    <Slidr {...settings}>
                        <div class="card" style={{ display:'flex' }}>
                            <div class="" style={ {flex:'4', padding:'5px'} }><img src={kara} alt="" /></div>
                            <div class="caption text-center" style={ {flex:'8', padding:'5px'} }>
                                <h3>Kara</h3>
                                <p>Backend Developer</p>
                            </div>
                        </div>
                        <div class="card" style={{ display:'flex'}}>
                            <div class="" style={ {flex:'4', padding:'5px'} }><img src={julio} alt="" /></div>
                            <div class="caption text-center" style={ {flex:'8', padding:'5px'} }>
                                <h3>Julio</h3>
                                <p>FrontEnd Developer</p>
                            </div>
                        </div>
                        <div class="card" style={{ display:'flex' }}>
                            <div class="" style={ {flex:'4', padding:'5px'} }><img src={sabrina} alt="" /></div>
                            <div class="caption text-center" style={ {flex:'8', padding:'5px'} }>
                                <h3>Sabrina</h3>
                                <p>Public Relations Head</p>
                            </div>
                        </div>
                        <div class="card" style={{ display:'flex' }}>
                            <div class="" style={ {flex:'4', padding:'5px'} }><img src={mirela} alt="" /></div>
                            <div class="caption text-center" style={ {flex:'8', padding:'5px'} }>
                                <h3>Mirela</h3>
                                <p>Corporate Affairs Head</p>
                            </div>
                        </div>
                    </Slidr>
                </div>
            </div>
        )
    }
}