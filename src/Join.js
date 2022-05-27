import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import styles from "./Join.module.css";
import Certify from './Certify';

function Join() {

  const [nickname, setNickname] = useState("")
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  }

  const onIdHandler = (e) => {
    setId(e.target.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  }

  const onPassword2Handler = (e) => {
    setPassword2(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const getUser = axios.post("http://34.64.85.119/", 
    {
      nickname: {nickname},
      id: {id},
      password: {password}
    }).then(function(response){
      <Link to={'/Certify'}></Link>
    }).catch(function(e){
      alert(e);
      console.log({nickname}, {id}, {password});
    })
  }
 
  return (
    <div>
      <h1 className={styles.join}>회원가입</h1>
      <form>
      <input
        className={styles.nickname}
        name="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={onNicknameHandler}
      />
      <button className={styles.check}>중복확인</button>
      <br></br>
      <input
        className={styles.id}
        name="id"
        placeholder="아이디"
        value={id}
        onChange={onIdHandler}
      />
      <button className={styles.checkid}>중복확인</button>
      <br></br>
      <input
        className={styles.password}
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onPasswordHandler}
      />
      <br></br>
      <input
        className={styles.password2}
        name="password2"
        placeholder="비밀번호 확인"
        value={password2}
        onChange={onPassword2Handler}
      />
      <br></br>
        <button className={styles.Btn} text="submit" onClick={onSubmit}>
            완료
        </button>
      </form>
    </div>
  );
}

export default Join;