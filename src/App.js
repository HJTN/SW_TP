import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Join from "./Join";
import Login from "./Login";
import JoinFin from "./JoinFin";
import Certify from './Certify';
import UploadPage from "./UploadPage";
import Main from "./Main";
import Search from "./Search";
import MyInfo from "./MyInfo";
import Center from "./Center";
import Chat from "./Chat";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/Join" exact element={<Join />} />
      <Route path="/JoinFin" exact element={<JoinFin />} />
      <Route path="/Certify" exact element={<Certify />} />
      <Route path="/UploadPage" exact element={<UploadPage />} />
      <Route path="/Main" exact element={<Main />} />
      <Route path="/Search" exact element={<Search />} />
      <Route path="/MyInfo" exact element={<MyInfo />} />
      <Route path="/Center" exact element={<Center />}/>
      <Route path="/Chat" exact element={<Chat />}/>
    </Routes>
  );
}

export default App;