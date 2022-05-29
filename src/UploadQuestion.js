import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './UploadQuestion.module.css';
import { FaChevronLeft } from "react-icons/fa";
import Navbar from './Navbar';

function UploadQuestion()
{
    const handleRegister = () => {
        alert('clicked!');
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Center'} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>문의하기</h2>
            </div>
            <button className={styles.registerBtn} onClick={handleRegister}>등록</button>
            <input type={'text'} className={styles.registerTitle} placeholder='문의 제목'/>
            <h4 className={styles.contentTitle}>문의 내용</h4>
            <textarea className={styles.registerContent} fixed />
            <Navbar />
        </div>
    )
}

export default UploadQuestion;