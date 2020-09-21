import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({
  title,
  year,
  rating,
  summary,
  poster
}) {
  return (
    <Link
      className="movie"
      to={{
        pathname: '/detail',
        state: { title, year, rating, summary, poster },
      }}
    >
      <img src={poster} alt={title} />
      <div className="movie__data">
        <div className="movie__title">{title}</div>
        <div className="movie__year">{year}, {rating}/10</div>
        <p className="movie__summary">{summary}</p>
      </div>
    </Link>
  )
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string,
  poster: PropTypes.string,
};

export default Movie;