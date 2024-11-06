import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from "./login/login";
import { About } from "./about/about";
import { Play } from "./play/play";
import { HighScores } from "./highScores/highScores";

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

export default function App() {
    return (
    <BrowserRouter>
  <div className = "app index_body">
    <header>
        <h1>
            <span style={{ color: 'red' }}>R</span>
            <span style={{ color: 'green' }}>G</span>
            <span style={{ color: 'blue' }}>B</span> Color Guesser Login
        </h1>

      <nav>
        <menu className="navbar-nav">
          <li className="nav-item"><NavLink className = "nav-link" to="play">Play</NavLink></li>
          <li className="nav-item"><NavLink className = "nav-link" to="highScores">High Scores</NavLink></li>
          <li className="nav-item"><NavLink className = "nav-link" to="about">About</NavLink></li>
        </menu>
      </nav>
      <hr />
    </header>
    
        <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/play" element={<Play />} />
            <Route path="/scores" element={<HighScores />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>

    <footer>
      <hr />
      <span className="text-reset">Created by: Joey Dahlke</span>
      <br />
      <a className = "git-link" href="https://github.com/jcdahlke/startup">GitHub</a>
    </footer>
  </div> 
  </BrowserRouter>);
}