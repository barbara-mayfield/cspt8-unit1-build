import React from "react";
import Board from "./components/Board/Board";
import About from "./components/About";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <h1>Conway's Game of Life</h1>
            </div>
            <div className="main">
                <Board />
                <About />
            </div>
            <div className="App-footer">
                <img src={logo} className="App-logo" alt="React logo" />
            </div>
        </div>
    );
}

export default App;
