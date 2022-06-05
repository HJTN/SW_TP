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
    const [notis, setNotis] = useState(['공지1', '공지2', '공지3', '공지4', '공지5', '공지6','공지7','공지8','공지9','공지10','공지11','공지12','공지13','공지14','공지15','공지16','공지17'])

    useEffect(() => {
        axios.get('url')
        .then(response => {
            if (response.data.success) {
                setNotis([...notis, response.data])
            } else {
                alert("공지사항을 가져오는데 실패했습니다.")
            }
        }).catch(error => {
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
                    height={780}
                    itemHeight={47}
                    itemKey='Noti'
                >
                    {(item) => (
                        <List.Item key={item.Noti}>
                            <div className={styles.renderItemBox}>
                                <Link to={'/DetailNoti'} style={{textDecoration: 'none'}} className={styles.linkStyle}>
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

export default Noti;