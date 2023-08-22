import React from 'react';
import MainPage from './Mainpage/Mainpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Dashboard/Login/Login';
import {gapi} from 'gapi-script';
import  { useEffect } from 'react'
const clientId = "448276558019-0obgku0jod6ri848vto7pa0a8idbve70.apps.googleusercontent.com"
function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    }
    gapi.load('client:auth2',start);
  })


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

