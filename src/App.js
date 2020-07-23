import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <h1>Conway's Game of Life</h1>
            </div>
            <div className="main">
                <section className="game">
                    <h2>Game Board</h2>
                </section>
                <section className="about">
                    <h2>About this Algorithm &gt; &gt;</h2>
                </section>
            </div>
            <div className="App-footer">
                <img src={logo} className="App-logo" alt="React logo" />
            </div>
        </div>
    );
}

export default App;
