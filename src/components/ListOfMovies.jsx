import React from 'react';
import Movies from './Movies';

const ListOfMovies = ({ movies }) => (

  <div className="movie_container">
    { movies.Search
       && movies.Search.map((item) => <Movies key={item.imdbID} {...item} />)}
  </div>
);

export default ListOfMovies;
