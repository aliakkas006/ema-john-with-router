import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>

                <NavLink
                    to="/shop"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}
                >
                    Shop
                </NavLink>

                <NavLink
                    to="/review"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}
                >
                    Order Review
                </NavLink>

                <NavLink
                    to="/inventory"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}
                >
                    Manage Inventory
                </NavLink>

                <span style={{color: "wheat", margin: "5px"}}>{user.displayName}</span>
                {
                    user.email ?
                        <button onClick={logOut}
                        >Log out</button>
                        :
                        <NavLink
                            to="/signin"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "blue"
                            }}
                        >
                            Sign In
                        </NavLink>
                }
                
            </nav>
        </div>
    );
};

export default Header;