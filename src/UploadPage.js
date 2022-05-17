import React, {useState} from 'react';
import useForm from 'react-hook-form';
import FileUpload from './FileUpload';
import styles from "./UploadPage.module.css";

function UploadPage() 
{
    const [Title, setTitle] = useState("")
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    return(
        <div>
            <div className={styles.box}>
            <h2 className={styles.Title}>공유하기</h2>
            </div>
            <br/>
            <button className={styles.RegisterBtn}>등록</button>
            <form>
                <FileUpload refreshFunction={updateImages} />
                <br />
                <br />
                <input className={styles.WriteTitle} placeholder="글 제목.." value={Title}/>            
            </form>
        </div>
    )
}

export default UploadPage;