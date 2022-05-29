import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Question.module.css';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { HiOutlineSpeakerphone} from 'react-icons/hi'
import Navbar from './Navbar';
import { List } from 'antd';
function Question()
{
    let ques_list = ['질문1', '질문2', '질문3', '질문4', '질문5', '질문6']
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
                <Link to={'/Center'} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>질문게시판</h2>
                <Link to={'/Refer'}>
                    <div className={styles.searchIcon}><FaSearch /></div>
                </Link>
            </div>
            <List
                dataSource={ques}
                renderItem={renderItem}
                className={styles.itemList}
            />
            <Navbar />
        </div>
    )
}

export default Question;