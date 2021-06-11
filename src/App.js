import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Askout from './component/Askout';
import Login from './component/auth/Login';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
      {
        user ? (<Askout />) : (<Login />)
      }
    </div>
  );
}

export default App;
