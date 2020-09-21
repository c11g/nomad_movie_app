import React from 'react';
import PropTypes from 'prop-types';

function Movie({
  title,
  year,
  rating,
  summary,
  poster,
  genres
}) {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie__data">
        <div className="movie__title">{title}</div>
        <div className="movie__year">{year}, {rating}/10</div>
        <div className="movie__year">{genres.join(', ')}</div>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  )
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;