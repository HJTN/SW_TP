import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import styles from './WishList.module.css'
import Navbar from '../Navbar/Navbar';
import { FaSearch, FaChevronLeft } from "react-icons/fa";

function WishList()
{
    return(
        <div className={styles.Mainbox}>
            <h2 className={styles.Title}>위시리스트</h2>
            <Link to={'/Main'}>
                <div className={styles.Backicon}><FaChevronLeft /></div>
            </Link>
            <Link to={'/Refer'}>
                <div className={styles.Searchicon}><FaSearch /></div>
            </Link>
            <Navbar />
        </div>
    )
}

export default WishList;