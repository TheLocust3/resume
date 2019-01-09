import React from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';

let unstyledLink = css`
  color: black;
  text-decoration: none;

  &:hover {
    color: #333333;
  }
`;

class UnstyledLink extends React.Component {
  render() {
    let { className, children, ...props } = this.props;

    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={`${unstyledLink} ${this.props.className}`}
        {...props}>
        {this.props.children}
      </a>
    );
  }
}

UnstyledLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default UnstyledLink;
