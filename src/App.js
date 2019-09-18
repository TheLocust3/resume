import React, { Component } from 'react';

import './global-styles';

import Content from './components/Content';

import Header from './content/Header';
import LeftColumn from './content/LeftColumn';
import RightColumn from './content/RightColumn';

class App extends Component {
  render() {
    return (
      <Content>
        <Header />

        <div style={{ height: '94.5%', position: 'relative' }}>
          <LeftColumn />

          <RightColumn />
        </div>
      </Content>
    );
  }
}

export default App;
