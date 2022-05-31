import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './DetailQues.module.css';
import { FaChevronLeft } from "react-icons/fa";
import Navbar from './Navbar';

function DetailQues()
{
    const [data, setData] = useState({
        title: '질문 제목...',
        qContent: '질문 내용...',
        aContent: '답변 내용...',
    });

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Question'} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>질문게시판</h2>
            </div>
            <div type={'text'} className={styles.quesTitle}>{data.title}</div>
            <h4 className={styles.quesContentTitle}>질문 내용</h4>
            <div className={styles.quesContent}>{data.qContent}</div>
            <h4 className={styles.ansContentTitle}>답변 내용</h4>
            <div className={styles.ansContent}>{data.aContent}</div>
            <Navbar />
        </div>
    )
}

export default DetailQues;