import React, { useState, useEffect }from 'react'
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import FileUpload from '../Utils/FileUpload';
import styles from './Main.module.css';
import { FaSearch } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import Meta from 'antd/lib/card/Meta';
import { Card, Row, Col } from 'antd';
function Main() 
{
    const [Products, setProducts] = useState([])

    useEffect(() => {
        
        axios.post('url', )
            .then(response => {
                if(response.data.success) {
                    setProducts(response.data)
                } else {
                    alert("상품들을 가져오는데 실패했습니다.")
                }
            })
    }, [])

    const renderCards = Products.map((product, index) => {

        return <Col key={index} /* lg={} md={} xs={} 나중에 카드 크기 정의해야함 */>
            <Card
                cover={<img src={ 'url' }/>}
            >
                <Meta />
            </Card>
        </Col>
    }) //정보 카드 생성

    return (
        <div>
            <div className={styles.Mainbox}>
            <h2 className={styles.Title}>NOCS</h2>
            <Link to={'/Refer'}>
                <div className={styles.Icon}><FaSearch /></div>
            </Link>

            <Row>
                {renderCards}
            </Row> 
            

            <button className={styles.loadMore}>더보기</button>
            <Navbar />
            </div>
        </div>
    )
}

export default Main;