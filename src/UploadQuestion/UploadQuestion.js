import React, { useState, useEffect }from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './UploadQuestion.module.css';
import { FaChevronLeft } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import axios from "axios";

function UploadQuestion()
{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const onClick = () => {
        axios.post('http://34.64.45.39:8000/Qna/', {
            title: title,
            u_id: 'dd',
            q_content: content,
            a_content: '',
        }).then(response => {
            console.log(response);
            navigate('/Question')
        }).catch(error => {
            alert(error);
            console.log(error);
        });
        console.log(title)
        console.log(content)
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Center'} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft size="27"/></div>
                </Link>
                <h2 className={styles.Title}>문의하기</h2>
            </div>
            <button className={styles.registerBtn} onClick={onClick}>등록</button>
            <input 
                type={'text'}
                className={styles.registerTitle} 
                onChange={handleTitle}
                value={title}
                placeholder='문의 제목' />
            <h4 className={styles.contentTitle}>문의 내용</h4>
            <textarea
                className={styles.registerContent} 
                onChange={handleContent} 
                value={content}
                placeholder='문의 내용'
                fixed />
            <Navbar />
        </div>
    )
}

export default UploadQuestion;