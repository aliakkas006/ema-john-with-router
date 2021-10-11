import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignIn.css'

const SignIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_ui = location?.state?.from || '/shop';
    // console.log('came from', location?.state?.from);

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_ui);
            });
    }

    return (
        <div className="signin-form">
            <div>
                <h2>Sign-In</h2>

                <form>
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
                <button
                    className="btn-regular"
                    onClick={handleGoogleSignIn}
                >Google Sign in</button>

            </div>
        </div>
    );
};

export default SignIn;