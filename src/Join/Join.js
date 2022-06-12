import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import styles from "./Join.module.css";

function Join() {

    const navigate = useNavigate();
  const [nickname, setNickname] = useState("")
  const [u_id, setU_id] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const navigate = useNavigate();

  const onNicknameHandler = (e) => {
    setNickname(e.target.value);
  }

  const onIdHandler = (e) => {
    setU_id(e.target.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  }

  const onPassword2Handler = (e) => {
    setPassword2(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://34.64.45.39:8000/User_info/", 
    {
      nickname: nickname,
      u_id: u_id,
      password: password
    }).then(function(response){
        console.log({ u_id }, { password });
        navigate('/JoinFin');
    }).catch(function(e){
      alert(e);
      console.log({nickname}, {u_id}, {password});
    })
  }
 
  return (
    <div>
      <h1 className={styles.join}>회원가입</h1>
      <form onSubmit={(e)=>submit(e)}>
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
        name="u_id"
        placeholder="아이디"
        value={u_id}
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
        <button className={styles.Btn}>
            완료
        </button>
      </form>
    </div>
  );
}

export default Join;