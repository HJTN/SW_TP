import React, { useState }from 'react'
import { Link } from 'react-router-dom';
import styles from './ItemInfo.module.css';
import Navbar from './Navbar';
import { FaChevronLeft, FaRegUser } from "react-icons/fa";
import { BiCloset } from 'react-icons/bi'

function ItemInfo()
{
    const [numChat, setNumChat] = useState(0)
    const [numInter, setNumInter] = useState(0)
    const [numShow, setNumShow] = useState(0)

    const handleClick = () => {
        alert('Clicked!')
    }
    
    return (
        <div>       
            <div className={styles.Mainbox}>
                <h2 className={styles.Title}>상세정보</h2>
                <Link to={'/Main'}>
                    <div className={styles.Backicon}><FaChevronLeft /></div>
                </Link>
            </div>
            <div className={styles.Itembox}>
                <div className={styles.Itemicon} ><BiCloset size='6x' /></div>
                <div className={styles.itemChangeBtn} onClick={handleClick}></div>
            </div>
            <div className={styles.midBox}>
                <div className={styles.userBox}>
                    <div className={styles.userIcon}><FaRegUser size='50px' /></div>
                    <div className={styles.userID}>@ID</div>
                </div>
                <div className={styles.itemTitle}>---------- 글 제목 ----------</div>
            </div>
            <div className={styles.itemContent}>
                의류 상세 정보 작성란...
            </div>
            <div className={styles.controlBox}>
                <Link to={'/Chat'} style={{textDecoration: 'none'}} className={styles.controlChat}>
                    <span>댓글 {numChat}</span>
                </Link>
                <span className={styles.controlInter}>관심 {numInter}</span>
                <span className={styles.controlShow}>조회 {numShow}</span>
            </div>
            <Navbar />
        </div>
    )
}

export default ItemInfo;

//size : lg, xs, sm, 1x, 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x