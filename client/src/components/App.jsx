import React from 'react';
import $ from 'jquery';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import SearchMovies from './SearchMovies.jsx';
import ClearFilter from './ClearFilter.jsx';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredMovies: [],
      filtered: false
    };

    this.addMovie = this.addMovie.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/movies',
      type: 'GET',
      success: (movies) => {
        this.setState({ movies });
      }
    })
  }

  searchMovies(movie) {
    $.ajax({
      url: '/movies',
      type: 'GET',
      success: (movies) => {
        this.setState({ movies });
      }
    })
    const title = movie.title;
    const state = [...this.state.movies];
    let filteredMovies = [];
    for (let movie of state) {
      if (movie.title.toLowerCase() === title.toLowerCase()) {
        filteredMovies.push(movie);
      }
    }
    if (!filteredMovies.length) {
      filteredMovies.push({title: 'No movie found by that name'});
    }
    this.setState({
      filteredMovies,
      filtered: true
    })
  }

  addMovie(movie) {
    $.ajax({
      url: '/movies',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(movie),
      success: (data) => {
        movie.id = data.insertId;
        const movies = [...this.state.movies];
        movies.push(movie);
        this.setState({ movies });
      }
    })
  }

  clearFilter() {
    const {filtered} = this.state;
    const {filteredMovies} = this.state;
    this.setState({
      filteredMovies: [],
      filtered: false
    })
  }

  // haWatched() {

  // }

  render() {
    const {movies} = this.state;
    const {filteredMovies} = this.state;
    const {filtered} = this.state;
    let filteredFlicks;
    let filteredClear;

    if (filteredMovies.length) {
      filteredFlicks = <MovieList movies={filteredMovies}/>
      // console.log('filtering:', filteredMovies);
    } else {
      filteredFlicks = <MovieList movies={movies}/>
    }

    if (filtered) {
      filteredClear = <ClearFilter clear={this.clearFilter}/>
    }

    return (
      <div>
        <nav className="navbar">
          <div><h2>Movie List</h2></div>
          <SearchMovies movies={this.state.movies} searchMovies={this.searchMovies}/>
          <AddMovie movies={this.state.movies} addMovie={this.addMovie}/>
          <div className="clear-nav">
            {filteredClear}
          </div>
        </nav>
        {filteredFlicks}
      </div>
    )
  }
}

export default App;