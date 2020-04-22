import React from 'react';
import $ from 'jquery';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import SearchMovies from './SearchMovies.jsx';
import ClearFilter from './ClearFilter.jsx';
import WatchedList from './WatchedList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      filteredMovies: [],
      filtered: false,
      watched: false
    };

    this.addMovie = this.addMovie.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.watched = this.watched.bind(this);
    this.unwatched = this.unwatched.bind(this);
    this.update = this.update.bind(this);
  }

  update() {
    $.ajax({
      url: '/movies',
      type: 'GET',
      success: (movies) => {
        this.setState({ movies });
      }
    })
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
      if (movie.title.toLowerCase().split(' ').join('').includes(title.toLowerCase().split(' ').join(''))) {
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
        movie.watched = 0;
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
      filtered: false,
    })
  }

  watched() {
    this.setState({
      watched: true
    })
  }

  unwatched() {
    this.setState({
      watched: false
    })
  }

  render() {
    const {movies} = this.state;
    const {filteredMovies} = this.state;
    const {filtered} = this.state;
    const {watched} = this.state;
    let filteredFlicks;
    let filteredClear;

    if (watched) {
      if (filteredMovies.length) {
        filteredFlicks = <WatchedList movies={filteredMovies} update={this.update}/>
      } else {
        filteredFlicks = <WatchedList movies={movies} update={this.update}/>
      }
    } else {
      if (filteredMovies.length) {
        filteredFlicks = <MovieList movies={filteredMovies} update={this.update}/>
      } else {
        filteredFlicks = <MovieList movies={movies} update={this.update}/>
      }
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
            <div className="watch-nav"><button className="all-movies" onClick={this.unwatched}>Unwatched</button><button className="watched-list" onClick={this.watched}>Watched</button></div>
            {filteredClear}
          </div>
        </nav>
        {filteredFlicks}
      </div>
    )
  }
}

export default App;