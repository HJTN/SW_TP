import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Center.module.css';
import { FaSearch } from "react-icons/fa";
import Navbar from './Navbar';
function Main() 
{

    return (
        <div>
            <div className={styles.Mainbox}>
            <h2 className={styles.Title}>고객센터</h2>
            <Link to={'/Search'}>
                <div className={styles.Icon}><FaSearch /></div>
            </Link>
            

            <button className={styles.loadMore}>더보기</button>
            <Navbar />
            </div>
        </div>
    )
}

export default Main;