import React from 'react';
import { FaLayerGroup, FaRegUser, FaRegHeart, FaTelegramPlane, FaRegFile } from "react-icons/fa";
import styles from './Navbar.module.css';
import { Route, Routes, Link } from "react-router-dom";

function Navbar() 
{
    return(
        <nav className={styles.wrapper}>
            <div>
            <Link to='/Main'>
                <span className={styles.Icon1}><FaLayerGroup size="2em"/></span>
            </Link>
            <Link to='/UploadPage'>
                <span className={styles.Icon2}><FaRegFile size="2em"/></span>
            </Link>
            <span className={styles.Icon3}><FaTelegramPlane size="2em"/></span>
            <span className={styles.Icon4}><FaRegHeart size="2em"/></span>
            <Link to='/MyInfo'>
                <span className={styles.Icon5}><FaRegUser size="2em"/></span>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar;