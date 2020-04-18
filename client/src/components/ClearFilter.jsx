import React from 'react';

class ClearFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { clear } = this.props;
    return (
      <a href="#" className="clear" onClick={clear}><i className="fas fa-fast-backward"></i></a>
    );
  }
}

export default ClearFilter;