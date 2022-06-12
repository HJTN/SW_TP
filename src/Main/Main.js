import React, { useState, useEffect }from 'react'
import useForm from 'react-hook-form';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> upstream/main
import styles from './Main.module.css';
import { FaSearch } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import Meta from 'antd/lib/card/Meta';
import { Card, Row, Col } from 'antd';
import { List, Input } from 'antd';

function Main() 
{
    const [Products, setProducts] = useState([])

    useEffect(()=> {

        getProduct();
        
    }, [])
    
    const getProduct = (event) => {
        axios.get("http://34.64.45.39/Cloth/") // request보낼때, 8개만 보내주라고 body랑 같이 보냄
        .then(function(response){
            setProducts(response.data);
        }).catch(function(event){
            alert("상품목록을 가져오는데 실패했습니다.");
        })
    }

    const renderCards = Products.map((product, index) => {
        return <Col key={index}> 
            <Card className={styles.card}
                cover = {Products.length > 6 ? <img src={Products.slice(0,6)}/> : <img src={product.files}/>} //가져온 데이터의 이미지 띄우기
                title={product.Title}
                description={product.Description} // 상세정보 
            >
            </Card>
        </Col>
    })

    return (
        <div>
            <div className={styles.Mainbox}>
                <h2 className={styles.Title}>NOCS</h2>
                <Link to={'/Refer'}>
                    <div className={styles.searchIcon}><FaSearch size="1.5em"/></div>
                </Link>
            </div>  


            <Row>
                {renderCards}
            </Row>
                
            <Link to='/ItemList'>
                <div className={styles.itemMore}>더보기</div>
            </Link>
            
            <Navbar />
        </div>
    )
}

export default Main;