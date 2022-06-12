import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import styles from './ItemList.module.css'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import { Icon, Col, Card, Row, Carousel } from 'antd';
import { position } from 'polished';

function ItemList()
{
    const [Products, setProducts] = useState([])

    useEffect(()=> {

        getProduct();
        
    }, [])
    
    const getProduct = (event) => {
        axios.get("http://34.64.45.39:8000/Cloth/") // request보낼때, 8개만 보내주라고 body랑 같이 보냄
        .then(function(response){
            setProducts(response.data);
        }).catch(function(event){
            alert("상품목록을 가져오는데 실패했습니다.");
        })
    }

    const renderCards = Products.map((product, index) => {
        return <Col>
            <Card className={styles.card}
                cover = {<img src={product.files} />} //가져온 데이터의 이미지 띄우기, 
                title={product.Title}
                description={product.Description} // 상세정보 
            >
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

            <Navbar />
        </div>
    )
}

export default ItemList;