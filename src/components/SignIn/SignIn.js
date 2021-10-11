import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {
    return (
        <div className="signin-form">
            <div>
                <h2>Sign-In</h2>

                <form onSubmit="">
                    <input type="email" name="email" id="" placeholder="Enter your email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                    <br /><br />
                </form>
                <p>
                    New to Ema-John?
                    <Link to="/register">Create Account</Link>
                </p>

                <div>------------or-------------</div>
                <button className="btn-regular">Google Sign in</button>

            </div>
        </div>
    );
};

export default SignIn;