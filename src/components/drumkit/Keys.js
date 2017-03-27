import React from 'react';

class Keys extends React.Component {
  render() {
    const { map, className } = this.props;

    return (
      <div className={'key ' + className}>
        <span className="letter">{map.key}</span>
        <span>{map.name}</span>
      </div>
    )
  }
}

Keys.propTypes = {
  map: React.PropTypes.object.isRequired,
  className: React.PropTypes.string.isRequired,
}

export default Keys;
