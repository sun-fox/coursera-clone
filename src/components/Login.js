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
                        <h3 class ="text-center">Log In</h3><br/>
                        {/* <button id="facebtn"><i class ="fa fa-facebook">&nbsp;&nbsp;Continue With Facebook</i></button><br/>
                        <button id="applebtn"><i class ="fa fa-apple">&nbsp;&nbsp;Continue With Apple</i></button> */}
                        <hr/>
                        {/* <p class ="text-center">Or</p> */}
                        <form>
                            <div class ="form-item">
                            <p>EMAIL</p>
                            <input type="email" />
                            </div>
                            <div  class ="form-item">
                            <p>PASSWORD</p>
                            <input type="password" />
                            </div>
                            <Link to="/"><p>Forgot Password ?</p></Link>
                            <button id ="signjoin">Log In</button>
                        </form>
                        <br/>
                        <p class ="text-center">Or</p>
                        <Link to="/signup"><p class ="text-center">Don't Have an Account ?</p></Link>
                        <Link to="/"><p class ="text-center">Log In with your Organisation</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup
