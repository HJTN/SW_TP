import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import styles from './ItemList.module.css'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { Icon, Col, Card, Row, Carousel } from 'antd';
//import VirtualList from 'rc-virtual-list';
import { BiCloset } from 'react-icons/bi';

function ItemList()
{
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0) //어디서부터 데이터를 가져오는지에 대한 위치
    const [Limit, setLimit] = useState(6) // 처음 데이터를 가져올때와 더보기 버튼을 눌러서 가져올때 얼마나 많은 데이터를 한번에 가져오는지
    const [PostSize, setPostSize] = useState(0)

    useEffect(()=> {

        let body = {
            skip: Skip,
            limit: Limit
        } //데이터를 6개만 가져올 수 있게 하는거

        getProduct(body)
        
    }, [])
    
    const getProduct = (body) => {
        axios.get("http://34.64.45.39:8000/Cloth/", body) // request보낼때, 8개만 보내주라고 body랑 같이 보냄
        .then(response => {
           if (response.data.success) {
               if(body.loadMore) {
                   /* 더보기 버튼을 눌렀을때는 */
                   setProducts([...Products, response.data.productInfo])
               } else {
                   setProducts(response.data.productInfo)
               }
               setPostSize(response.data.postSize) //사진이 더있냐에 따라 더보기 버튼 없애고 나오게 하는거.
           } else {
               alert("상품들을 가져오는데 실패했습니다.")
           } 
        })
    }

    const loadMoreHandler = () => {

        let skip = Skip + Limit
                //   0  +  8
                //   8  +  8

        let body = {
            skip: skip, // Skip + Limit
            limit: Limit,
            loadMore: true //더보기눌렀을때 나오는 request라는 정보
        }
        
        getProduct(body)
        setSkip(skip)
    }

    const renderCards = Products.map((product, index) => {
        return <Col lg={6} md={8} xs={24} key={index}> 
            <Card
                cover={product.images} //가져온 데이터의 이미지 띄우기, 
            >
                <meta 
                    title={product.title}
                    description={product.description} // 상세정보 
                />
            </Card>
        </Col>
    })
    
    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Main'}>
                    <div className={styles.Backicon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>의류 목록</h2>
                <Link to={'/Refer'}>
                    <div className={styles.Searchicon}><FaSearch /></div>
                </Link>
            </div>
            <span className={styles.contentTitle}>총 게시글: {Products.length}</span>
            
            <Row>
                {renderCards}
            </Row>

            <br />

            {PostSize >= Limit && 
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={loadMoreHandler}>더보기</button>
                </div>
            }

            <Navbar />
        </div>
    )
}

export default ItemList;