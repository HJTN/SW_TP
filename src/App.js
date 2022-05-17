import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Join from "./Join";
import Login from "./Login";
import JoinFin from "./JoinFin";
import Certify from './Certify';
import UploadPage from "./UploadPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/Join" exact element={<Join />} />
      <Route path="/JoinFin" exact element={<JoinFin />} />
      <Route path="/Certify" exact element={<Certify />} />
      <Route path="/UploadPage" exact element={<UploadPage />} />
    
    </Routes>
  );
}

export default App;