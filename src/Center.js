import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Center.module.css';
import { FaSearch } from "react-icons/fa";
import { HiOutlineSpeakerphone} from 'react-icons/hi'
import Navbar from './Navbar';
function Center() 
{

    return (
        <div>
            <div className={styles.Mainbox}>
                <h2 className={styles.Title}>고객센터</h2>
                <Link to={'/Search'}>
                    <div className={styles.Icon}><FaSearch /></div>
                </Link>
            </div>
            <div className={styles.notifyListBox}>
                <h2 className={styles.notifyTitle}>공지사항</h2>
                
                <button className={styles.notifyMore}>더보기</button>
            </div>
            <div className={styles.questionListBox}>
                <h2 className={styles.questionTitle}>자주 묻는 질문</h2>

                <button className={styles.questionMore}>더보기</button>
            </div>
            <div className={styles.startQuestionBox}>
                <Link to={''}>
                    <h4 className={styles.startQuestion}><HiOutlineSpeakerphone className={styles.speakerIcon}/>새 문의하기</h4>
                </Link>
                <h4 className={styles.runningText}>운영시간:  평일 10:00 ~ 18:00</h4>
            </div>
            <Navbar />
        </div>
    )
}

export default Center;