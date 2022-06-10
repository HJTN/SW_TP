import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Noti.module.css';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import axios from "axios";

function Noti()
{
    const [notis, setNotis] = useState([])

    useEffect(() => {
        axios.get('http://34.64.45.39:8000/Notice/')
        .then(response => {
            if (response.data) {
                setNotis(response.data)
            } else {
                alert("공지사항을 가져오는데 실패했습니다.")
            }
        }).catch(error => {
            alert('Error...')
            console.log(error)
        });
    }, []);

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Center'}>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>공지게시판</h2>
                <Link to={'/Refer'}>
                    <div className={styles.searchIcon}><FaSearch /></div>
                </Link>
            </div>
            <List
                className={styles.itemList}
            >
                <VirtualList
                    data={notis}
                    height={750}
                    itemHeight={47}
                    itemKey='Noti'
                >
                    {(item) => (
                        <List.Item key={item.Noti}>
                            <div className={styles.renderItemBox}>
                                <Link to={'/DetailNoti'} state={{data:item}} style={{textDecoration: 'none'}} className={styles.linkStyle}>
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

export default Noti;