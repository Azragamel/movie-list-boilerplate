import React from 'react';

class Watched extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href="#" className="watched"><i className="fas fa-eye"></i></a>
    )
  }
}

export default Watched;