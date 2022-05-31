import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Question.module.css';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { HiOutlineSpeakerphone} from 'react-icons/hi'
import Navbar from '../Navbar/Navbar';
import { List } from 'antd';
import VirtualList from 'rc-virtual-list';

function Question()
{
    const [ques, setQues] = useState(['질문1', '질문2', '질문3', '질문4', '질문5', '질문6','질문7', '질문8', '질문9', '질문10', '질문11', '질문12'])

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
                    height={600}
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