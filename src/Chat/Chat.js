import React, { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import styles from './Chat.module.css';
import { FaChevronLeft, FaRegUser } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { List, Input } from 'antd';
import VirtualList from 'rc-virtual-list';
import axios from "axios";

function Chat() 
{
    const [Chats, setChats] = useState([])
    const [comment, setComment] = useState('')
    const [value, setValue] = useState('')

    useEffect(() => {
        axios.get('http://34.64.45.39:8000/Comment/')
            .then(response => {
                if (response.data) {
                    setChats(response.data)
                } else {
                    alert("댓글을 가져오는데 실패했습니다.")
                }
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            });
    }, [value]);

    const onClick = () => {
        if (comment.trim().length > 0) {
            axios.post('http://34.64.45.39:8000/Comment/', {
                cloth_id: 1,
                u_id: 'dd',
                comment: comment,
            }).then(response => {
                console.log(response);
                setValue(comment);
                setComment('');
            }).catch(error => {
                alert(error);
                console.log(error);
            });
            // let now = new Date();
            // setChats([...Chats, {
            //     u_id: 'dd',
            //     comment: comment,
            //     date: `${now.getFullYear()}.${now.getMonth()+1}.${now.getDate()}. ${now.getHours()}:${now.getMinutes()}`,
            // }]);
            // setValue(comment);
            // setComment('');
        }
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (comment.trim().length > 0) {
                axios.post('http://34.64.45.39:8000/Comment/', {
                    cloth_id: 1,
                    u_id: 'dd',
                    comment: comment,
                }).then(response => {
                    console.log(response);
                    setValue(comment);
                    setComment('');
                }).catch(error => {
                    alert(error);
                    console.log(error);
                });
                // let now = new Date();
                // setChats([...Chats, {
                //     u_id: 'dd',
                //     comment: comment,
                //     date: `${now.getFullYear()}.${now.getMonth()+1}.${now.getDate()}. ${now.getHours()}:${now.getMinutes()}`,
                // }]);
                // setValue(comment);
                // setComment('');
            }
        }
    }
    
    const onChange = (e) => {
        setComment(e.target.value);
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/ItemInfo'}>
                    <div className={styles.backIcon}><FaChevronLeft size="27"/></div>
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
                                <div className={styles.renderUImage}><FaRegUser size='30px' /></div>
                                <div className={styles.renderUId}>@{item.u_id}</div>
                                <div className={styles.renderComment}>{item.comment}</div>
                                <div className={styles.renderDate}>{/*item.date*/}</div>
                            </div>
                        </List.Item>
                    )}
                </VirtualList>
            </List>
            <div className={styles.registerBox}>
                <Input 
                    type={'text'} 
                    value={comment}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    className={styles.registerText}
                />
                <button className={styles.registerBtn} onClick={onClick}>등록</button>
            </div>
            <Navbar />
        </div>
    )
}

export default Chat;