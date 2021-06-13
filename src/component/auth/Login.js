import { ArrowForwardIos } from '@material-ui/icons'
import logo from '../../images/ask-out logo.png';
import React, { useState } from 'react';
import './Login.css';
import {auth , provider} from '../../firebase'


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        auth.signInWithPopup(provider).catch((e) => alert(e.message));

        console.log(auth);
    }

    const handleLogin = (e) => {

        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            console.log(auth);
        }).catch((e) => alert(e.message));

        setEmail("");
        setPassword("");
    };

    const handleRegister = (e) => {

        e.preventDefault()
        
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            if(auth) {
                console.log(auth);
            }
        }).catch((e) => alert(e.message));

        setEmail("");
        setPassword("");
    };

    return (
        <div className="login">
            <div className="login_container">
                <div className="login_logo">
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
                            <p onClick={signIn}>Continue with Google</p>
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
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="login_inputField">
                                <input
                                    value = {password}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="login_forgot">
                            <small>Forgot Password</small>
                            <button type="submit" onClick={handleLogin}>Login</button>
                        </div>
                        <button onClick={handleRegister}>Register</button>
                    </div>
                </div>
                <div className="login_lang">
                    <p>हिंदी</p>
                    <ArrowForwardIos fontSize="small"/>
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
