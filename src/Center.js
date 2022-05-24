import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Center.module.css';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { HiOutlineSpeakerphone} from 'react-icons/hi'
import Navbar from './Navbar';
function Center() 
{
    function handleClick() {
        alert('Clicked!')
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={''} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>고객센터</h2>
                <Link to={'/Search'} /* 검색 페이지 구현 필요 */>
                    <div className={styles.searchIcon}><FaSearch /></div>
                </Link>
            </div>
            <div className={styles.notifyListBox}>
                <h2 className={styles.notifyTitle}>공지사항</h2>
                <span className={styles.notifyItem1} /* 공지 사항 가져오는 기능 구현 필요 */>최신 공지 사항 제목1</span>
                <span className={styles.notifyItem2}>최신 공지 사항 제목2</span>
                <span className={styles.notifyItem3}>최신 공지 사항 제목3</span>
                <span className={styles.notifyItem4}>최신 공지 사항 제목4</span>
                <button className={styles.notifyMore} onClick={handleClick}>더보기</button>
            </div>
            <div className={styles.questionListBox}>
                <h2 className={styles.questionTitle}>자주 묻는 질문</h2>
                <span className={styles.questionItem1} /* 질문 가져오는 기능 구현 필요 */>질문1</span>
                <span className={styles.questionItem2}>질문2</span>
                <span className={styles.questionItem3}>질문3</span>
                <span className={styles.questionItem4}>질문4</span>
                <button className={styles.questionMore} onClick={handleClick}>더보기</button>
            </div>
            <div className={styles.startQuestionBox}>
                <Link to={''}>
                    <h4 className={styles.startQuestion}><HiOutlineSpeakerphone className={styles.speakerIcon} size="24"/>새 문의하기</h4>
                </Link>
                <h4 className={styles.runningText}>운영시간:  평일 10:00 ~ 18:00</h4>
            </div>
            <Navbar />
        </div>
    )
}

export default Center;