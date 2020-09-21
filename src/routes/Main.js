import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Main.css';

class Main extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async() => {
    const {data:
      {data: {movies}}
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({
      movies,
      isLoading: false,
    })
  }

  renderMovie = () => this.state.movies.map(movie =>
    <Movie 
      key={movie.id}
      id={movie.id}
      title={movie.title}
      year={movie.year}
      rating={movie.rating}
      summary={movie.summary}
      poster={movie.medium_cover_image}
    />
  );

  componentDidMount(){
    this.getMovies();
  }
  
  render() {
    const {isLoading} = this.state;
    return (
      <div className="container">
        {isLoading
        ? <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        : <div className="movies">
            {this.renderMovie()}
          </div>
        }
      </div>
    );
  }
}

export default Main;
