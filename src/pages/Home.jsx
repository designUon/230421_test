import React from 'react'
import logo from '../logo.svg';
import '../App.css';


export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span>React와 Router로 작성한 페이지입니다<br />환영합니다</span>
            </header>
        </div>
    )
}
