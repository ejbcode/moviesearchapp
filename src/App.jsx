import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import ListOfMovies from './components/ListOfMovies';
import NotFound from './components/NotFound';

function App() {
  const API_KEY = `${process.env.REACT_APP_API_KEY}`;
  const [inputMovie, setInputMovie] = useState('');
  const [movies, setMovies] = useState({});
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=Movie&s=`;

  useEffect(() => {
    axios
      .get(`${API_URL}${inputMovie}`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [inputMovie]);

  return (
    <div className="App">
      <header>
        <h1>Movie Search AppX</h1>
      </header>
      <Search setInputMovie={setInputMovie} />
      {movies.Error === 'Movie not found!' ? (
        <NotFound />
      ) : (
        <ListOfMovies movies={movies} />
      )}
    </div>
  );
}

export default App;
