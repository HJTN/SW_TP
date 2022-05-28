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
            <Link to={'/Refer'}>
                <div className={styles.Searchicon}><FaSearch /></div>
            </Link>
            <div className={styles.Userbox}>
                <div className={styles.Usericon} ><FaRegUser size="xs" /></div>
            </div>
            <div className={styles.rectangle}></div>
            <div className={styles.line1}></div>
            <h3 className={styles.sharetext}>공유 중인 물품</h3>
            <div className={styles.line2}></div>
            <h3 className={styles.lenttext}>대여 중인 물품</h3>
            <h3 className={styles.pwtext}>비밀번호 변경</h3>
            <div className={styles.line3}></div>
            <h3 className={styles.infotext}>회원정보 변경</h3>
            <div className={styles.line4}></div>
            <h3 className={styles.connecttext}>연동 관리</h3>
            <div className={styles.line5}></div>
            <h3 className={styles.withdrawtext}>계정 탈퇴</h3>
            <Navbar />
        </div>
        
    )
}

export default MyInfo;

//size : lg, xs, sm, 1x, 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x