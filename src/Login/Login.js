//로그인화면
import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import MyInfo from "../MyInfo/MyInfo";
import UploadPage from "../UploadPage/UploadPage";

function Login() {
  // 기본 로그인
  const navigate = useNavigate();
  const [u_id, setU_id] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
 
  const onIdHandler = (e) => {
    setU_id(e.target.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://34.64.45.39:8000/User_info/login/", 
    {
      u_id: u_id,
      password: password
    }).then(function(response){
      if(response.data){
        setUser(response.data.u_id);
        <MyInfo user={user} />
        navigate('/Main');
      } else {
        alert("로그인에 실패했습니다.");
      }
    }).catch(function(e){
      alert(e);
      console.log({u_id}, {password});
    })
  }

  return (
    <div>
      <h1 className={styles.login}>로그인</h1>
      <form onSubmit={(e)=>submit(e)}>
        <input
          className={styles.id}
          name="u_id"
          placeholder="아이디를 입력하세요"
          value={u_id}
          onChange={onIdHandler}
        />
        <br></br>
        <input
          className={styles.password}
          name="password"
          type="password"
          placeholder="패스워드를 입력하세요"
          value={password}
          onChange={onPasswordHandler}
        />
        <br></br>
        <button className={styles.loginBtn} >로그인</button>
        <br></br>
        <Link to="/Join">
          <button className={styles.joinBtn}>회원가입</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;