import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import axios from "axios";

function FileUpload(props) 
{
    const [Images, setImages] = useState([])

    const dropHandler = (files) => {

        let formData = new FormData(); // FormData안에는 전달하는 파일의 정보
        const config = {
            header: { 'content-type': 'multipart/fomr-data'} // header에 파일의 contenttype을 전해줌
        }        
        formData.append("file", files[0])

        axios.post('http://34.64.45.39:8000/Cloth/', formData, config)
            .then(response => {
                if(response.data.success) {
                    setImages([...Images, response.data.filePath])
                    props.refreshFunction([...Images, response.data.filePath])
                
                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
                <div 
                    style={{
                        width: 300, height: 240, border: "none",
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }} 
                    {...getRootProps()}>
                    <input {...getInputProps()} />
                </div>
            )}
            </Dropzone>
        </div>
    );
}

export default FileUpload;
