import React from 'react'
import {Link} from 'react-router-dom';

import '../css/style.css';
function Signup() {
    return (
    <div>
        <div class ="container-fluid">
            <div class ="row">
                <div class ="col-md-4"></div>
                <div class ="col-md-4">
                    <div class ="signup-box">
                        <h3 class ="text-center">Sign Up</h3><br/>
                        {/* <button id="facebtn"><i class ="fa fa-facebook">&nbsp;&nbsp;Continue With Facebook</i></button><br/>
                        <button id="applebtn"><i class ="fa fa-apple">&nbsp;&nbsp;Continue With Apple</i></button> */}
                        <hr/>
                        {/* <p class ="text-center">Or</p> */}
                        <form>
                            <div class ="form-item">
                            <p>FULL NAME</p>
                            <input type="text" />
                            </div>
                            <div class ="form-item">
                            <p>EMAIL</p>
                            <input type="email" />
                            </div>
                            <div  class ="form-item">
                            <p>PASSWORD <span>(between 8 and 72 character)</span></p>
                            <input type="password" />
                            </div>
                            <p><Link to="/login">Already have an account ?</Link></p>
                            <button id ="signjoin">Join For Free</button>
                        </form>
                        <br/>
                        <p class ="text-center">Or</p>
                        <Link to="/"><p class ="text-center">Signup with your Organisation</p></Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup
