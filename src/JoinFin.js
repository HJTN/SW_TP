import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import styles from "./JoinFin.module.css";

function JoinFin() {
    return (
        <div>
            <div className={styles.Icon}><FaRegCheckCircle /></div>
            <h2 className={styles.font}>회원가입이 완료되었습니다.</h2>
            <button className={styles.LoginBtn}>로그인으로 돌아가기</button>
        </div>
    )
}

export default JoinFin;