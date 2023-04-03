import React from 'react'
import "./Nav.css"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navigation = useNavigate();
    const [show, handleShow] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])


    return (
        <div className={`nav  ${show && "nav__black"}`}>
            <div className="nav__contents">

                <img
                    onClick={() => {
                        navigation("/")
                    }}
                    className='nav__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='' />
                <img
                    onClick={() => {
                        navigation("/profile")
                    }}
                    className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='' />
            </div>
        </div>
    )
}

export default Nav
