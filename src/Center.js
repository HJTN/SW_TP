import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Center.module.css';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { HiOutlineSpeakerphone} from 'react-icons/hi'
import Navbar from './Navbar';
import { List } from 'antd';

function Center()
{
    let noti_list = ['최신 공지 사항 제목1', '최신 공지 사항 제목2', '최신 공지 사항 제목3', '최신 공지 사항 제목4']
    let ques_list = ['질문1', '질문2', '질문3', '질문4']
    const [notis, setNotis] = useState(noti_list)
    const [ques, setQues] = useState(ques_list)

    const renderItem = (data) => {
        return (
            <div className={styles.renderItemBox}>
                <Link to={''} style={{textDecoration: 'none'}}>
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
                    renderItem={renderItem}
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
                    renderItem={renderItem}
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