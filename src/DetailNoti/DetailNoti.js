import React, { useState, useEffect }from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './DetailNoti.module.css';
import { FaChevronLeft } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';

function DetailNoti()
{
    let location = useLocation();

    const [data, setData] = useState({});

    useEffect(() => {
        setData(location.state.data);
    }, [location]);
    
    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Noti'} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>공지게시판</h2>
            </div>
            <div type={'text'} className={styles.notiTitle}>{data.title}</div>
            <h4 className={styles.contentTitle}>공지 내용</h4>
            <div className={styles.notiContent}>{data.content}</div>
            <Navbar />
        </div>
    )
}

export default DetailNoti;