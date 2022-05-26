import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Noti.module.css';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import Navbar from './Navbar';
import { List } from 'antd';
function Noti()
{
    let noti_list = ['최신 공지 사항 제목1', '최신 공지 사항 제목2', '최신 공지 사항 제목3', '최신 공지 사항 제목4']
    const [notis, setNotis] = useState(noti_list)

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
                <Link to={'/Center'}>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>공지사항</h2>
                <Link to={'/Search'}>
                    <div className={styles.searchIcon}><FaSearch /></div>
                </Link>
            </div>
            <div className={styles.notifyBox}>
                <List
                    dataSource={notis}
                    renderItem={renderItem}
                    className={styles.itemList}
                />
            </div>
            <Navbar />
        </div>
    )
}

export default Noti;