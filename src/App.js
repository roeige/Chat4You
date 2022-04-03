import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Background from './layout/Background';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/message_components/Chat';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("oriel");
  return (
    <Background>
    <Chat user = {user}/>
    </Background>
  );
}

export default App;
