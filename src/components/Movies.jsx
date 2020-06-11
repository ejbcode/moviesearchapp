import React from 'react';

const Movies = (props) => (
  <div className="movie">
    <p className="movie__title">{props.Title}</p>
    <p className="movie__year">{props.Year}</p>

    <img src={props.Poster} loading="lazy" alt="props.Title" />
  </div>
);

export default Movies;
