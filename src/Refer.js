import React, { useState } from 'react'
import axios from 'axios';
import SearchFeature from './SearchFeature';
import { Icon, Col, Card, Row, Carousel } from 'antd';
import styles from './Refer.module.css';

function Refer()
{
    const [Products, setProducts] = useState([])
    const [PostSize, setPostSize] = useState(0)
    const [Skip, setSkip] = useState(0) //어디서부터 데이터를 가져오는지에 대한 위치
    const [Limit, setLimit] = useState(8) // 처음 데이터를 가져올때와 더보기 버튼을 눌러서 가져올때 얼마나 많은 데이터를 한번에 가져오는지
    const [SearchTerm, setSearchTerm] = useState("")

    const getProducts = (body) => {
        axios.post("url", body) // request보낼때, 8개만 보내주라고 body랑 같이 보냄
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

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)

        let body = {
            skip: 0,
            limit: Limit,
            SearchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerm(newSearchTerm)
        getProducts(body)
    }

    const renderCards = Products.map((product, index) => {
        return <Col lg={6} md={8} xs={24} key={index}> 
            <Card
                cover={product.images} //가져온 데이터의 이미지 띄우기, 
            >
                <meta 
                    title={product.title}
                    description={`$${product.price}`} // 가격 
                />
            </Card>
        </Col>
    })
    
    return (
        <div className={styles.Mainbox}>
            <h2 className={styles.Title}>검색페이지</h2>
            <div className={styles.block}>
                <SearchFeature
                    refreshFunction={updateSearchTerm}
                />

                <Row gutter={[16, 16]} /*gutter여백넣기*/>
                    {renderCards}
                </Row>
            </div>
        </div>
    )
}

export default Refer;