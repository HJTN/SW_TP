import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { Route, Routes, Link } from "react-router-dom";
import styles from "./JoinFin.module.css";

function JoinFin() {
    return (
        <div>
            <div className={styles.Icon}><FaRegCheckCircle /></div>
            <h2 className={styles.font}>회원가입이 완료되었습니다.</h2>
            <Link to={'/'}>
                <button className={styles.LoginBtn}>로그인으로 돌아가기</button>
            </Link>
        </div>
    )
}

export default JoinFin;