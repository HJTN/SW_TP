import React from 'react'
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import FileUpload from './FileUpload';
import styles from './Main.module.css';
import { FaSearch } from "react-icons/fa";
import Navbar from './Navbar';

function Main() 
{
    return (
        <div>
            <div className={styles.Mainbox}>
            <h2 className={styles.Title}>NOCS</h2>
            <Link to={'/Search'}>
                <div className={styles.Icon}><FaSearch /></div>
            </Link>
            <Navbar />
            </div>
        </div>
    )
}

export default Main;