import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Question.module.css';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { HiOutlineSpeakerphone} from 'react-icons/hi'
import Navbar from '../Navbar/Navbar';
import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import axios from "axios";

function Question()
{
    const [ques, setQues] = useState(['질문1', '질문2', '질문3', '질문4', '질문5', '질문6','질문7', '질문8', '질문9', '질문10', '질문11', '질문12', '질문13', '질문14', '질문15', '질문16'])

    // useEffect(() => {
    //     axios.get('http://34.64.45.39:8000/Qna/')
    //     .then(response => {
    //         if (response.data.success) {
    //             setQues([...ques, response.data])
    //         } else {
    //             alert("질문을 가져오는데 실패했습니다.")
    //         }
    //     }).catch(error => {
    //         console.log(error)
    //     });
    // }, []);

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
                className={styles.itemList}
            >
                <VirtualList
                    data={ques}
                    height={750}
                    itemHeight={47}
                    itemKey='Ques'
                >
                    {(item) => (
                        <List.Item key={item.Ques}>
                            <div className={styles.renderItemBox}>
                                <Link to={'/DetailQues'} style={{textDecoration: 'none'}} className={styles.linkStyle}>
                                    <div className={styles.renderInBox}>
                                        <span className={styles.renderItem}>{item}</span>
                                    </div>
                                </Link>
                            </div>
                        </List.Item>
                    )}
                </VirtualList>
            </List>
            <Navbar />
        </div>
    )
}

export default Question;