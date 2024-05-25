import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/app.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/common/Navbar/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
