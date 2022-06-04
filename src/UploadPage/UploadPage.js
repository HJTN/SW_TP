import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import FileUpload from '../Utils/FileUpload';
import styles from "./UploadPage.module.css";
import Navbar from '../Navbar/Navbar';
import { BiCloset } from 'react-icons/bi'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function UploadPage(props) 
{
    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Images, setImages] = useState([])
    const navigate = useNavigate();

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        //채운 값들을 서버에 request로 보낸다.
        const body = {
            title: Title,
            description: Description,
            images: Images
        }

        axios.post('http://34.64.45.39:8000/Cloth/', body)
            .then(response => {
                alert("상품 업로드에 성공했습니다.")
                navigate('/Main');
            }).catch(function(e){
                alert(event);
            })
    }

    /*
    const handleRegister = () => {
        alert('clicked!');
    }

    const handleClick = () => {
        alert('Clicked!')
    }
    */

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Main'}>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>공유하기</h2>
            </div>
            <div className={styles.Itembox}>
                <div className={styles.Itemicon} ><BiCloset size='300' /></div>
                <div className={styles.itemChangeBtn}><AiOutlinePlusCircle size='4em'/></div>
            </div>
            <Link to={'/Main'}>
                <div className={styles.Backicon}><FaChevronLeft /></div>
            </Link>
            <Link to={'/Refer'}>
                <div className={styles.Searchicon}><FaSearch /></div>
            </Link>
            <br/>
            
            <form onSubmit={(e)=>submitHandler(e)}>
                <button className={styles.registerBtn}>등록</button>
                <div className={styles.drop}><FileUpload refreshFunction={updateImages} /></div>
                <br />
                <input className={styles.registerTitle} placeholder="글 제목.." onChange={titleChangeHandler} value={Title}/> 
                <br />
                <br />
                <textarea className={styles.registerContent} onChange={descriptionChangeHandler} value={Description}>상세정보를 입력하세요.</textarea>
            </form>

            <Navbar />
        </div>
    )
}

export default UploadPage;