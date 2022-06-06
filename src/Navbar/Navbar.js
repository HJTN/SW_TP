import React from 'react';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiFileTextLine } from 'react-icons/ri';
import { BsChatText } from 'react-icons/bs';
import styles from './Navbar.module.css';
import { Route, Routes, Link } from "react-router-dom";

function Navbar() 
{
    return(
        <nav className={styles.wrapper}>
            <div>
            <Link to='/Main'>
                <span className={styles.Icon1}><AiOutlineHome size="2em"/></span>
            </Link>
            <Link to='/UploadPage'>
                <span className={styles.Icon2}><RiFileTextLine size="2em"/></span>
            </Link>
            <Link to='/Center'>
                <span className={styles.Icon3}><BsChatText size="2em"/></span>
            </Link>
            <Link to={'/WishList'}>
            <span className={styles.Icon4}><FaRegHeart size="2em"/></span>
            </Link>
            <Link to='/MyInfo'>
                <span className={styles.Icon5}><FaRegUser size="2em"/></span>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar;