import React, { Component } from 'react';
import styled from 'react-emotion';

import { colors } from '../constants';

let FooterContainer = styled('div')`
  position: absolute;
  bottom: 0;
  left: 5vw;

  width: 90vw;

  padding-top: 2px;

  border-top: 1px ${colors.borderBlack} solid;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <center>
          <i>References available upon request.</i>
        </center>
      </FooterContainer>
    );
  }
}

export default Footer;
