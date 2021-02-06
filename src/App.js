import React , { useState , useEffect } from 'react';
import Character from './components/Character';
import './App.css';
import axios from 'axios';

const App = () => {
  // State
  const [characters,setCharacters] = useState([]);

  // Fetching info from Star Wars API
  const fetchSWA = () => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      console.log(res);
      setCharacters(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }
  useEffect(fetchSWA, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { characters.map(info => <Character key = {info.name} props = {info}/>) }
    </div>
  );
}

export default App;
