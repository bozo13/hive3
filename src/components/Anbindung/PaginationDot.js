import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    height: 18,
    width: 22,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0,
    textAlign: 'cetner',
  },
  dot: {
    border: `2px solid #F8C05E `,
    height: 12,
    width: 12,
    borderRadius: 6,
    margin: 3,
  },
  active: {
    backgroundColor: 'rgba(248,192,94,0.6)',

  },
};

class PaginationDot extends React.Component {
  handleClick = event => {
    this.props.onClick(event, this.props.index);
  };

  render() {
    const { active } = this.props;

    let styleDot;

    if (active) {
      styleDot = Object.assign({}, styles.dot, styles.active);
    } else {
      styleDot = styles.dot;
    }

    return (
      <button type="button" style={styles.root} onClick={this.handleClick}>
        <div style={styleDot} />
      </button>
    );
  }
}

PaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationDot;