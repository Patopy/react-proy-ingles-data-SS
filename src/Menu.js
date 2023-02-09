import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import ApiIngles from "./Components/ApiIngles";

export default function Menu(props) {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Frases
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/apiingles" className="nav-link">
                S.Sheet API
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Img GAS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Routes>
          <Route exact path="/" element={<Home texto={props.texto} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/apiingles" element={<ApiIngles />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
