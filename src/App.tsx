import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./component/logIn";
import Main from "./component/main";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [userName, setUserName] = useState<string>("");
  return (
    <div className="App">
      <Routes>
        <Route path="main" element={<Main userName={userName} />} />
        <Route
          path="login"
          element={<LogIn userName={userName} setUserName={setUserName} />}
        />
        <Route
          path="/"
          element={<LogIn userName={userName} setUserName={setUserName} />}
        />
      </Routes>
    </div>
  );
}

export default App;
