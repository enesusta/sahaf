import React, { useState, useEffect, useContext } from "react";
import burger from "../../assets/burger.svg";
import close from "../../assets/close.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Navbar = () => {
    const [click, isClick] = useState(true);
    const { isAuth } = useContext(AuthContext);

    const burgerClickHandler = () => {
        isClick(!click);
    };

    useEffect(() => {
        console.log(`auth is ${isAuth}`);
    });

    return (
        <div className="section">
            <header className="navbar">
                <div className="navbar-header">Sahaf Sepeti</div>
                <button href="#" className="navbar-toggle" onClick={burgerClickHandler}>
                    <img src={click ? burger : close} alt="" />
                </button>
                <nav className="navbar-links">
                    <Link to="/authors">
                        <button className="navbar-link">Yazarlar</button>
                    </Link>
                    <Link to="/profile">
                        <button className="navbar-link">Profilim</button>
                    </Link>
                    {isAuth ? <SignOut /> : <SignIn />}
                </nav>
            </header>
            <header
                className={!click ? "navbar-mobile-active" : "navbar-mobile-passive"}
            >
                <nav className="navbar-links-mobile">
                    <div className="navbar-link">
                        <a href="#">Projects</a>
                    </div>

                    <div className="navbar-link">
                        <a href="">About</a>
                    </div>
                    <a href="#" className="navbar-buttom-left">
                        <button>Sign Up</button>
                    </a>
                    <a href="#" className="navbar-buttom">
                        <button>
                            <Link to="/login" />
                        </button>
                    </a>
                </nav>
            </header>
        </div >
    );
};

export default Navbar;
