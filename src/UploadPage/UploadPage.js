import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import styles from "./UploadPage.module.css";
import Navbar from '../Navbar/Navbar';
import { BiCloset } from 'react-icons/bi'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function UploadPage(props) 
{
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const navigate = useNavigate();

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const submit = (event) => {
        event.preventDefault();
        const upload_File = event.target[1].files[0];
        console.log(upload_File);
        const formdata = new FormData();
        formdata.append('files', upload_File); //append(key, value)
        formdata.append('Title', Title);
        formdata.append('Description', Description);
        formdata.append("enctype", "multipart/form-data");
        
        const config = {
            Header : {
                'content-type' : 'multipart/form-data',
            },
        };

        axios.post('http://34.64.45.39:8000/Cloth/', formdata , config)
            .then(function(response){
                alert("상품 업로드에 성공했습니다.");
            }).catch(function(event){
                alert(event);
            })
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Main'}>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>공유하기</h2>
            </div>
            <Link to={'/Main'}>
                <div className={styles.Backicon}><FaChevronLeft /></div>
            </Link>
            <Link to={'/Refer'}>
                <div className={styles.Searchicon}><FaSearch /></div>
            </Link>
            <br/>
            
            <form onSubmit={(e)=>submit(e)}>
                <button className={styles.registerBtn}>등록</button>
                <input type="file" name="files" accept="image/jpg,impge/png,image/jpeg,image/gif"/>
                <input className={styles.registerTitle} name="Title" placeholder="글 제목.." onChange={titleChangeHandler} value={Title}/> 
                <br />
                <br />
                <textarea className={styles.registerContent} name="Description" onChange={descriptionChangeHandler} value={Description}>상세정보를 입력하세요.</textarea>
            </form>

            <Navbar />
        </div>
    )
}


export default UploadPage;


//https://jakpentest.tistory.com/77