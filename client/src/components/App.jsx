import React from 'react';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import SearchMovies from './SearchMovies.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filtered: false
    };

    this.addMovie = this.addMovie.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(movie) {
    const title = movie.title;
    const state = [...this.state.movies];
    let movies = [];
    for (let movie of state) {
      if (movie.title.toLowerCase() === title.toLowerCase()) {
        movies.push(movie);
      }
    }
    this.setState({
      movies
    })
  }

  addMovie(movie) {
    const movies = [...this.state.movies];
    movies.push(movie);
    this.setState({
      movies
    })
  }

  render() {
    const {movies} = this.state;
    return (
      <div>
        <nav className="navbar">
          <div><h2>Movie List</h2></div>
          <SearchMovies movies={this.state.movies} searchMovies={this.searchMovies}/>
          <AddMovie movies={this.state.movies} addMovie={this.addMovie}/>
        </nav>
        <MovieList movies={movies}/>
      </div>
    )
  }
}

export default App;