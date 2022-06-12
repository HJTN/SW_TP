import React, { useState, useEffect }from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ItemInfo.module.css';
import Navbar from '../Navbar/Navbar';
import { FaChevronLeft, FaRegUser } from "react-icons/fa";
import { BiCloset } from 'react-icons/bi'

function ItemInfo(props)
{
    let { id } = useParams(); 
    const [numChat, setNumChat] = useState(0)
    const [numInter, setNumInter] = useState(0)
    const [numShow, setNumShow] = useState(0)
    const [Products, setProducts] = useState([])

    useEffect(()=> {

        getProduct();
        
    }, [])
    
    const getProduct = (event) => {
        axios.get(`http://34.64.45.39/Cloth/12/`) // request보낼때, 8개만 보내주라고 body랑 같이 보냄
        .then(function(response){
            setProducts(response.data);
        }).catch(function(event){
            alert("상품목록을 가져오는데 실패했습니다.");
        })
    }
    
    return (
        <div>       
            <div className={styles.Mainbox}>
                <h2 className={styles.Title}>상세정보</h2>
                <Link to={'/WishList'}>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
            </div>
            <div className={styles.Itembox}>
                <div className={styles.Itemicon} >{<img src={Products.files} />}</div>
            </div>
            <div className={styles.midBox}>
                <Link to={'/UserInfo'} className={styles.userBox}>
                    <div className={styles.userIcon}><FaRegUser size='50px' /></div>
                </Link>
                <div className={styles.itemTitle}>{Products.Title}</div>
            </div>
            <div className={styles.itemContent}>
                {Products.Description}
            </div>
            <div className={styles.controlBox}>
                <Link to={'/Chat'} style={{textDecoration: 'none'}} className={styles.controlChat}>
                    <span>댓글 {numChat}</span>
                </Link>
                <span className={styles.controlInter}>관심 {numInter}</span>
                <span className={styles.controlShow}>조회 {numShow}</span>
            </div>
            <Navbar />
        </div>
    )
}

export default ItemInfo;

//size : lg, xs, sm, 1x, 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x