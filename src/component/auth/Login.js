import { blue } from '@material-ui/core/colors'
import { ArrowForwardIos } from '@material-ui/icons'
import logo from '../../images/ask-out logo.png';
import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div class="login_container">
                <div class="login_logo">
                    <img
                        src={logo}
                        alt=""
                    />
                </div>
                <div className="login_desc">
                    <p>A place to share knowledge and better undertand the world</p>
                    <p style={{color: 'lightcoral', fontSize: '25px'}}>
                        Handcrafted with ❤ by {" "}
                    </p>
                    <h3>Keshav Jaiswal</h3>
                </div>
                <div className="login_auth">
                    <div className="login_authOptions">
                        <div className="login_authOption">
                            <img
                                className="login_googleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt=""
                            />
                            <p>
                                Continue with Google
                            </p>
                        </div>
                        
                        <div className="login_authOption">
                            <img
                                className="login_googleAuth"
                                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                                alt=""
                            />
                            <span>Continue with Facebook</span>
                        </div>

                        <div className="login_authDesc">
                            <p>
                                <span style={{color: "lightcoral", cursor:"pointer"}}>
                                    Sign Up with Email
                                </span>
                                . By continuing you indicate that you have read and agree to Askout's
                                <span style={{color: "lightcoral", cursor:"pointer"}}>
                                    Terms of Services{" "}
                                </span>
                                and{" "}
                                <span style={{color:"lightcoral", cursor:"pointer"}}>
                                    Privacy Policy
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4>Login</h4>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="login_inputField">
                                <input
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="login_forgot">
                            <small>Forgot Password</small>
                            <button>
                                Login
                            </button>
                        </div>
                        <button>
                            Register
                        </button>
                    </div>
                </div>
                <div className="login_lang">
                    <p>हिंदी</p>
                    <ArrowForwardIos fontsize="small"/>
                </div>
                <div className="login_footer">
                    <p>About</p>
                    <p>Language</p>
                    <p>Careers</p>
                    <p>Business</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contacts</p>
                    <p>&copy; Askout Sample INC. 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Login
