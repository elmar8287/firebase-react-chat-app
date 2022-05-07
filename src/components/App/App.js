import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from '../Navbar/Navbar';
import Chat from '../Chat/Chat';
import Login from '../Login/Login';

function App() {
  const [user, setUser] = useState(false)
  const login = () => {
    setUser(true)
  }
  return (
    <Router>
      <Navigation user={user}/>
      {
        user ? <Chat /> : <Login login={login}/>
      }
    </Router>
  );
}

export default App;
