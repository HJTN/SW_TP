import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import FileUpload from '../Utils/FileUpload';
import styles from "./UploadPage.module.css";
import Navbar from '../Navbar/Navbar';

function UploadPage() 
{
    const [Title, setTitle] = useState("")
    const [Body, setBody] = useState("")
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    return(
        <div>
            <div className={styles.box}>
            <h2 className={styles.Title}>공유하기</h2>
            </div>
            <Link to={'/Main'}>
                <div className={styles.Backicon}><FaChevronLeft /></div>
            </Link>
            <Link to={'/Refer'}>
                <div className={styles.Searchicon}><FaSearch /></div>
            </Link>
            <br/>
            <button className={styles.RegisterBtn}>등록</button>
            <form>
                <div className={styles.drop}><FileUpload refreshFunction={updateImages} /></div>
                <br />
                <input className={styles.WriteTitle} placeholder="글 제목.." value={Title}/> 
                <br />
                <br />
                <textarea className={styles.info} style={{width: 300, height: 250 }}>상세정보..</textarea>
            </form>
            <Navbar />
        </div>
    )
}

export default UploadPage;