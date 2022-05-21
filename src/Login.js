//로그인화면
import React, { useState } from "react";
import styles from "./Login.module.css";
import { Route, Routes, Link } from "react-router-dom";

function Login() {
  // 기본 로그인
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1 className={styles.login}>로그인</h1>
      <input
        className={styles.id}
        id="id"
        name="id"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={onChange}
      />
      <br></br>
      <input
        className={styles.password}
        id="password"
        name="password"
        type="password"
        placeholder="패스워드를 입력하세요"
        value={password}
        onChange={onChange}
      />
      <br></br>
      <button className={styles.loginBtn}>로그인</button>
      <br></br>
      <Link to="/Join">
        <button className={styles.joinBtn}>회원가입</button>
      </Link>
    </div>
  );
}

export default Login;