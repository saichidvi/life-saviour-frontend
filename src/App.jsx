import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./styles/app.css";
import "./styles/global.css";

import AboutPage from "./pages/about.jsx";
import Auth from "./pages/AuthPage/auth.jsx";
import HomePage from "./pages/HomePage/home.jsx";
import NavBar from "./components/common/Navbar/navbar.jsx";
import Dashboard from "./pages/DashBoardPage/dashBoard.jsx";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/auth" element={<Auth></Auth>}></Route>
      </Routes>
    </>
  );
}

export default App;
