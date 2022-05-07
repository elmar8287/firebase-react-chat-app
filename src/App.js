import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/Navbar';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(true)
  return (
    <Router>
      <Navigation user={user}/>
      {
        user ? <Chat /> : <Login />
      }
    </Router>
  );
}

export default App;
