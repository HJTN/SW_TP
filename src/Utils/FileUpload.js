import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import axios from "axios";

function FileUpload(props) 
{
    const [Images, setImages] = useState([])

    const dropHandler = (files) => {

        //file을 백엔드로 전해줌.

        let formData = new FormData(); // FormData안에는 전달하는 파일의 정보

        const config = {
            header: { 'content-type': 'multipart/fomr-data'} // header에 파일의 contenttype을 전해줌
        }        
        formData.append("file", files[0])

        axios.post('http://34.64.45.39:8000/Cloth/', formData, config) //백엔드가 file을 저장하고 그 결과가 response에 담김. 백엔드는 다시 그 결과를 프론트로 보냄.
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
            <Dropzone onDrop={dropHandler}>
            {({getRootProps, getInputProps}) => (
                <section>
                    <div 
                        style={{
                            width: 300, height: 240, border: "none",
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }} 
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                    </div>
                </section>
            )}
            </Dropzone>
        </div>
    );
}

export default FileUpload;
