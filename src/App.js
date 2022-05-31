// import logo from './logo.svg';
// import './App.css';

import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// importing different page components which render unique content
// import Header from './components/Header';
// import Nav from './components/Nav';
// import Home from './components/Home';
// import Contact from './components/Contact';

// Using "react-router-dom" to render different page content w/o refreshing entire app
// import { HashRouter, Routes, Route } from "react-router-dom";

// Home Component
function Home() {

  return (
    <main>
      <h2>welcome to the home page!</h2>
    </main>
  )
}

function App() {

  return (
    <body>
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
            <Route path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/contact' component={Contact} />
          </Routes>
        </main>
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
