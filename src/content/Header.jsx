import React, { Component } from 'react';

import styled from 'react-emotion';

import { colors } from '../constants';

import HeaderLeft from '../components/HeaderLeft';
import HeaderRight from '../components/HeaderRight';

let HeaderContainer = styled('div')`
  position: relative;

  padding-bottom: 5px;

  border-bottom: 1px ${colors.borderBlack} solid;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderLeft>
          <h1>Jake Kinsella</h1>
        </HeaderLeft>

        <HeaderRight>
          <h3>Software Developer</h3>
        </HeaderRight>
      </HeaderContainer>
    );
  }
}

export default Header;
