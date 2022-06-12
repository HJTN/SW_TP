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
    const [ques, setQues] = useState([])

    useEffect(() => {
        axios.get('http://34.64.45.39:8000/Qna/')
        .then(response => {
            if (response.data) {
                setQues(response.data)
                console.log(ques)
            } else {
                alert("질문을 가져오는데 실패했습니다.")
            }
        }).catch(error => {
            console.log(error)
        });
    }, []);

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Center'} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft size="27"/></div>
                </Link>
                <h2 className={styles.Title}>질문게시판</h2>
                <Link to={'/Refer'}>
                    <div className={styles.searchIcon}><FaSearch size="1.5em"/></div>
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
                                <Link to={'/DetailQues'} state={{data:item}} style={{ textDecoration: 'none' }} className={styles.linkStyle}>
                                    <div className={styles.renderInBox}>
                                        <span className={styles.renderItem}>{item.title}</span>
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