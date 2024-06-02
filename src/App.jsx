import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/app.css";
import HomePage from "./pages/HomePage/home.jsx";
import AboutPage from "./pages/about.jsx";
import NavBar from "./components/common/Navbar/navbar.jsx";
import "./styles/global.css";
import Dashboard from "./pages/DashBoardPage/dashBoard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  );
}

export default App;
