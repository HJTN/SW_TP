import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Chat.module.css';
import { FaSearch } from "react-icons/fa";
import Navbar from './Navbar';
function Chat() 
{

    return (
        <div>
            <div className={styles.Mainbox}>
            <h2 className={styles.Title}>댓글</h2>
            <Link to={'/Search'}>
                <div className={styles.Icon}><FaSearch /></div>
            </Link>
            

            <button className={styles.Register}>등록</button>
            <Navbar />
            </div>
        </div>
    )
}

export default Chat;