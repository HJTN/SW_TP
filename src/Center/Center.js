import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Center.module.css';
import { FaChevronLeft } from "react-icons/fa";
import { HiOutlineSpeakerphone} from 'react-icons/hi'
import Navbar from '../Navbar/Navbar';
import { List } from 'antd';
import axios from "axios";

function Center()
{
    const [notis, setNotis] = useState(['최신 공지 사항 제목1', '최신 공지 사항 제목2', '최신 공지 사항 제목3', '최신 공지 사항 제목4'])
    const [ques, setQues] = useState(['질문1', '질문2', '질문3', '질문4'])

    // useEffect(() => {
    //     // 최근 공지사항 4개 가져오기
    //     axios.get('http://34.64.45.39:8000/Notice/')
    //     .then(response => {
    //         if (response.data) {
    //             response.data.map((data, idx) => {
    //                 if (idx < 4) {
    //                     setNotis([...notis, data])
    //                 }
    //             })
    //         } else {
    //             alert("공지사항을 가져오는데 실패했습니다.")
    //         }
    //     }).catch(error => {
    //         alert('Error...')
    //         console.log(error)
    //     });
    //     // 최근 질문사항 4개 가져오기
    //     axios.get('http://34.64.45.39:8000/Qna/')
    //     .then(response => {
    //         if (response.data) {
    //             response.data.map((data, idx) => {
    //                 if (idx < 4) {
    //                     setQues([...ques, data])
    //                 }
    //             })
    //         } else {
    //             alert("질문을 가져오는데 실패했습니다.")
    //         }
    //     }).catch(error => {
    //         alert('Error...')
    //         console.log(error)
    //     });
    // }, []);

    const renderNotiItem = (data) => {
        return (
            <div className={styles.renderItemBox}>
                <Link to={'/DetailNoti'} style={{textDecoration: 'none'}} className={styles.linkStyle}>
                    <div className={styles.renderInBox}>
                        <span className={styles.renderItem}>{data}</span>
                    </div>
                </Link>
            </div>
        )
    }

    const renderQuesItem = (data) => {
        return (
            <div className={styles.renderItemBox}>
                <Link to={'/DetailQues'} style={{textDecoration: 'none'}} className={styles.linkStyle}>
                    <div className={styles.renderInBox}>
                        <span className={styles.renderItem}>{data}</span>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Main'}>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>고객센터</h2>
            </div>
            <div className={styles.notifyBox}>
                <h2 className={styles.boxTitle}>공지사항</h2>
                <List
                    dataSource={notis}
                    renderItem={renderNotiItem}
                    className={styles.itemList}
                />
                <Link to={'/Noti'}>
                    <span className={styles.itemMore}>더보기</span> 
                </Link>
            </div>
            <div className={styles.questionBox}>
                <h2 className={styles.boxTitle}>자주 묻는 질문</h2>
                <List
                    dataSource={ques}
                    renderItem={renderQuesItem}
                    className={styles.itemList}
                />
                <Link to={'/Question'}>
                    <span className={styles.itemMore}>더보기</span> 
                </Link>
            </div>
            <div className={styles.startQuestionBox}>
                <Link to={'/UploadQuestion'}>
                    <h4 className={styles.startQuestion}><HiOutlineSpeakerphone className={styles.speakerIcon} size="24"/>새 문의하기</h4>
                </Link>
                <h4 className={styles.runningText}>운영시간:  평일 10:00 ~ 18:00</h4>
            </div>
            <Navbar />
        </div>
    )
}

export default Center;