import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="signin-form">
            <div>
                <h2>Create your Ema John account</h2>
                <form onSubmit="">
                    <input type="text" placeholder="Enter your name" />
                    <br />
                    <input type="email" name="" id="" placeholder="Enter your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account?
                    <Link to="/signin"></Link>
                </p>
                <div>-------------or---------------</div>
                <button className="btn-regular">Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;