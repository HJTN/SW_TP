import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MyInfo.module.css';
import Navbar from './Navbar';
import { FaSearch, FaChevronLeft, FaRegUser } from "react-icons/fa";

function MyInfo()
{
    return(
        <div className={styles.Mainbox}>
            <h2 className={styles.Title}>내정보</h2>
            <Link to={'/Main'}>
                <div className={styles.Backicon}><FaChevronLeft /></div>
            </Link>
            <Link to={'/Search'}>
                <div className={styles.Searchicon}><FaSearch /></div>
            </Link>
            <div className={styles.Userbox}>
                <div className={styles.Usericon} ><FaRegUser size="xs" /></div>
            </div>
            <Navbar />
        </div>
        
    )
}

export default MyInfo;

//size : lg, xs, sm, 1x, 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x