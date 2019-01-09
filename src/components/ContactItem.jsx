import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

import Icon from './Icon';
import Middle from './Middle';

let Padding = styled('div')`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`;

let textClass = css`
  margin-left: 40px;
`;

class ContactItem extends React.Component {
  render() {
    let { iconProps, children, ...props } = this.props;

    return (
      <Padding {...props}>
        <Icon size={24} {...iconProps} />

        <Middle>
          <div className={textClass}>{children}</div>
        </Middle>
      </Padding>
    );
  }
}

ContactItem.propTypes = {
  iconProps: PropTypes.any,
  children: PropTypes.any
};

export default ContactItem;
