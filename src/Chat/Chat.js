import React, { useState }from 'react'
import { Link } from 'react-router-dom';
import styles from './Chat.module.css';
import { FaChevronLeft } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { List, Input } from 'antd';
import VirtualList from 'rc-virtual-list';

function Chat() 
{
    const [Chats, setChats] = useState([])
    const [value, setValue] = useState('')

    const handleClick = () => {
        if (value.trim().length > 0) {
            let now = new Date();
            setChats([...Chats, {
                content: value,
                date: `${now.getFullYear()}.${now.getMonth()+1}.${now.getDate()}. ${now.getHours()}:${now.getMinutes()}`,
            }]);
            setValue('');
        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (value.trim().length > 0) {
                let now = new Date();
                setChats([...Chats, {
                    content: value,
                    date: `${now.getFullYear()}.${now.getMonth()+1}.${now.getDate()}. ${now.getHours()}:${now.getMinutes()}`,
                }]);
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
                <Link to={'/ItemInfo'}>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>댓글</h2>
            </div>
            <List
                className={styles.chatListBox}
            >
                <VirtualList
                    data={Chats}
                    height={600}
                    itemHeight={47}
                    itemKey='Chat'
                >
                    {(item) => (
                        <List.Item key={item.Chat}>
                            <div className={styles.renderItemBox}>
                                <div className={styles.renderItem}>{item.content}</div>
                                <div className={styles.renderDate}>{item.date}</div>
                            </div>
                        </List.Item>
                    )}
                </VirtualList>
            </List>
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