import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Noti.module.css';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { List } from 'antd';
function Noti()
{
    let noti_list = ['공지1', '공지2', '공지3', '공지4', '공지5', '공지6']
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
                <Link to={'/Refer'}>
                    <div className={styles.searchIcon}><FaSearch /></div>
                </Link>
            </div>
            <List
                dataSource={notis}
                renderItem={renderItem}
                className={styles.itemList}
            />
            <Navbar />
        </div>
    )
}

export default Noti;