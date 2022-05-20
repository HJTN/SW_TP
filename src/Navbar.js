import React from 'react';
import { FaLayerGroup, FaRegUser, FaRegHeart, FaTelegramPlane, FaRegFile } from "react-icons/fa";
import styles from './Navbar.module.css';
import { Route, Routes, Link } from "react-router-dom";

function Navbar() 
{
    return(
        <nav className={styles.wrapper}>
            <div>
            <span className={styles.Icon1}><FaLayerGroup /></span>
            <Link to='/UploadPage'>
                <span className={styles.Icon2}><FaRegFile /></span>
            </Link>
            <span className={styles.Icon3}><FaTelegramPlane /></span>
            <span className={styles.Icon4}><FaRegHeart /></span>
            <span className={styles.Icon5}><FaRegUser /></span>
            </div>
        </nav>
    )
}

export default Navbar;