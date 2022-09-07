import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./component/logIn";
import Main from "./component/main";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="main" element={<Main />} />
        <Route path="login" element={<LogIn />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
