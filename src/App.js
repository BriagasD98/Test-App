// import logo from './logo.svg';
import './App.css';

import React from 'react';

// importing different page components which render unique content
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';

// Using "react-router-dom" to render different page content w/o refreshing entire app
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <body>
      <HashRouter>
        <div className='hero'>
          <div>
            <Header></Header>
          </div>
          <div>
            <Nav></Nav>
          </div>
        </div>
        <main>
          <Routes>
            <Route exact={true} path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/contact' component={Contact} />
          </Routes>
        </main>
      </HashRouter>
    </body>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
