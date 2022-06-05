import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './UploadQuestion.module.css';
import { FaChevronLeft } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';

function UploadQuestion()
{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const onClick = () => {
        console.log(title)
        console.log(content)
        alert(title + '\n' + content);
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Center'} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>문의하기</h2>
            </div>
            <button className={styles.registerBtn} onClick={onClick}>등록</button>
            <input 
                type={'text'}
                className={styles.registerTitle} 
                onChange={handleTitle}
                value={title}
                placeholder='문의 제목' />
            <h4 className={styles.contentTitle}>문의 내용</h4>
            <textarea
                className={styles.registerContent} 
                onChange={handleContent} 
                value={content}
                placeholder='문의 내용'
                fixed />
            <Navbar />
        </div>
    )
}

export default UploadQuestion;