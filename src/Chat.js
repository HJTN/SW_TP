import React, { useState }from 'react'
import { Link } from 'react-router-dom';
import styles from './Chat.module.css';
import { FaChevronLeft } from "react-icons/fa";
import Navbar from './Navbar';
import { List, Input } from 'antd';
function Chat() 
{
    const [Chats, setChats] = useState([])
    const [value, setValue] = useState('')

    const handleClick = () => {
        alert('Clicked!');
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (value.trim().length > 0) {
                setChats([...Chats, value]);
                setValue('');
            }
        }
    }
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={''}>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>댓글</h2>
            </div>
            <List
                dataSource={Chats}
                renderItem={todo => (
                    <List.Item>
                        {todo}
                    </List.Item>
                )}
                style={({
                    marginBottom: '4px'
                })}
            />
            <div className={styles.registerBox}>
                <Input 
                    type={'text'} 
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={styles.registerText}
                />
                <button className={styles.registerBtn} onClick={handleClick}>등록</button>
            </div>
            <Navbar />
        </div>
    )
}

export default Chat;