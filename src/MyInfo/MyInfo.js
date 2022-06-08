import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './MyInfo.module.css';
import Navbar from '../Navbar/Navbar';
import { FaSearch, FaChevronLeft, FaRegUser, FaRegFile, FaBell, FaRegComments, FaRegFilePdf } from "react-icons/fa";

function MyInfo({user})
{
    //setU_id(u_id);
    console.log({user})
    return(
        <div className={styles.Mainbox}>
            <h2 className={styles.Title}>내정보</h2>
            <h3 className={styles.userIndex}>사용자이름</h3>
            <h3 className={styles.userId}>{user}</h3>
            <Link to={'/Main'}>
                <div className={styles.Backicon}><FaChevronLeft /></div>
            </Link>
            <Link to={'/Refer'}>
                <div className={styles.Searchicon}><FaSearch /></div>
            </Link>
            <div className={styles.Userbox}>
                <div className={styles.Usericon} ><FaRegUser size="90" /></div>
            </div>
            <div className={styles.Shareicon}><FaRegFile size="40"/></div>
            <div className={styles.lenticon}><FaRegFilePdf size="40" /></div>
            <div className={styles.qnaicon}><FaBell size="40"/></div>
            <div className={styles.chaticon}><FaRegComments size="40"/></div>
            <h4 className={styles.shareindex}>공유 중인 물품</h4>
            <h4 className={styles.lentindex}>대여 중인 물품</h4>
            <h4 className={styles.qnaindex}>문의답변</h4>
            <h4 className={styles.chatindex}>메세지</h4>
            <div className={styles.rectangle}></div>
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