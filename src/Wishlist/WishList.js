import React, { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import styles from './WishList.module.css'
import Navbar from '../Navbar/Navbar';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import { BiCloset } from 'react-icons/bi'

function WishList()
{
    const [Cards, setCards] = useState([{ 
        title: '----- 글 제목 -----',
        itemName: '상품이름',
        price: '상품가격',
        period: '대여기간~까지',
    },{ 
        title: '----- 글 제목 -----',
        itemName: '상품이름',
        price: '상품가격',
        period: '대여기간~까지',
    },{ 
        title: '----- 글 제목 -----',
        itemName: '상품이름',
        price: '상품가격',
        period: '대여기간~까지',
    },{ 
        title: '----- 글 제목 -----',
        itemName: '상품이름',
        price: '상품가격',
        period: '대여기간~까지',
    },{ 
        title: '----- 글 제목 -----',
        itemName: '상품이름',
        price: '상품가격',
        period: '대여기간~까지',
    }])
    
    const appendData = () => {
        
    }
    
    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Main'}>
                    <div className={styles.Backicon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>위시리스트</h2>
                <Link to={'/Refer'}>
                    <div className={styles.Searchicon}><FaSearch /></div>
                </Link>
            </div>
            <span className={styles.contentTitle}>나의 위시리스트({Cards.length})</span>
            <List
                className={styles.chatListBox}
            >
                <VirtualList
                    data={Cards}
                    height={600}
                    itemHeight={47}
                    itemKey='Card'
                >
                    {(item) => (
                        <List.Item key={item.Card}>
                            <div className={styles.renderItemBox}>
                                <div className={styles.renderImage}><BiCloset size='80px'/></div>
                                <div className={styles.renderTitle}>{item.title}</div>
                                <div className={styles.renderItemName}>{item.itemName}</div>
                                <div className={styles.renderPrice}>{item.price}</div>
                                <div className={styles.renderPeriod}>{item.period}</div>
                                <Link to={''} style={{textDecoration: 'none'}} className={styles.renderMore}>
                                    상세보기
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

export default WishList;