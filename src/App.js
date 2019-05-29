import React from 'react';
import './App.css';
import MovieCard from './card'
import Search from './search'

function App() {
  return (
    <div className="App">
      <Search />
      <MovieCard />
    </div>
  );
}

export default App;
