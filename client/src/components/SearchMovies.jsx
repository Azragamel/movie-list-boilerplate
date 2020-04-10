import React from 'react';
class SearchMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { searchMovies } = this.props;
    searchMovies(this.state);
  }

  render() {
    const { title } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="search-bar" name="title" type="text" value={title} onChange={this.handleChange}/>
        <button className="btn">
          <span>Search</span>
        </button>
      </form>
    )
  }
}

export default SearchMovies