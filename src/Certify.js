import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import styles from "./Join.module.css";
import JoinFin from "./JoinFin";

// axios.defaults.withCredentials = true;

function Certify() {

  const [inputs, setInputs] = useState({
    phone: "",
    number: "",
  });

  const { phone, number } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1 className={styles.join}>본인인증</h1>
      <input
        className={styles.nickname}
        id="phone"
        name="phone"
        placeholder="휴대폰 번호"
        value={phone}
        onChange={onChange}
      />
      <br></br>
      <input
        className={styles.id}
        id="number"
        name="number"
        placeholder="인증번호 입력"
        value={phone}
        onChange={onChange}
      />
      <br></br>
      <Link to={"/JoinFin"}>
      <button className={styles.Btn}>
        완료
      </button>
      </Link>
    </div>
  );
}

export default Certify;