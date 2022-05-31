import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Join from "./Join/Join";
import Login from "./Login/Login";
import JoinFin from "./Join/JoinFin";
import UploadPage from "./UploadPage/UploadPage";
import Main from "./Main/Main";
import Refer from "./Refer/Refer";
import MyInfo from "./MyInfo/MyInfo";
import Center from "./Center/Center";
import Chat from "./Chat/Chat";
import Noti from "./Noti/Noti";
import Question from "./Question/Question";
import WishList from "./Wishlist/WishList";
import UploadQuestion from "./UploadQuestion/UploadQuestion";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/Join" exact element={<Join />} />
      <Route path="/JoinFin" exact element={<JoinFin />} />
      <Route path="/UploadPage" exact element={<UploadPage />} />
      <Route path="/Main" exact element={<Main />} />
      <Route path="/Refer" exact element={<Refer />} />
      <Route path="/MyInfo" exact element={<MyInfo />} />
      <Route path="/ItemInfo" exact element={<ItemInfo />} />
      <Route path="/Center" exact element={<Center />}/>
      <Route path="/Chat" exact element={<Chat />}/>
      <Route path="/Noti" exact element={<Noti />}/>
      <Route path="/Question" exact element={<Question />}/>
      <Route path="/WishList" exact element={<WishList />}/>
      <Route path="/UploadQuestion" exact element={<UploadQuestion />}/>
      <Route path="/DetailNoti" exact element={<DetailNoti />}/>
      <Route path="/DetailQues" exact element={<DetailQues />}/>
    </Routes>
  );
}

export default App;