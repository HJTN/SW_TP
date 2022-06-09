import React, { useState, useEffect }from 'react'
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './Main.module.css';
import { FaSearch } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import Meta from 'antd/lib/card/Meta';
import { Card, Row, Col } from 'antd';
import { List, Input } from 'antd';
import VirtualList from 'rc-virtual-list';

function Main() 
{
    const [Products, setProducts] = useState([
        {
            cate: '# 신규 등록 의류',
        },
        {
            cate: '# 봄 # 데일리',
        },
        {
            cate: '# 행사 # 파티',
        },
        {
            cate: '# 휴가 # 여행',
        }
    ])

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
                    <div className={styles.searchIcon}><FaSearch /></div>
                </Link>
            </div>    
            <List
                className={styles.totalListBox}
            >
                <VirtualList
                    data={Products}
                    height={600}
                    itemHeight={47}
                    itemKey='Product'
                >
                    {(item) => (
                        <List.Item key={item.Product}>
                            <div className={styles.cateBox}>
                                <div className={styles.itemCate}>{item.cate}</div>                            
                                <Row className={styles.itemBox}>
                                    {renderCards}
                                </Row>
                                <Link to='/ItemList'>
                                    <div className={styles.itemMore}>더보기</div>
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

export default Main;