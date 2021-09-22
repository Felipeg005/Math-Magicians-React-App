import React from 'react';

class Quote extends React.Component {
  render() {
    return (
      <h2 id={this.props} className='quote'>"As far as the laws of mathematics refer to reality,
        they are not certain, and as far as they are certain, they do not refer to reality".
        — Albert Einstein
      </h2>
    );
  }
}

export default Quote;