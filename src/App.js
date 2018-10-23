import React, { Component } from 'react';

import './global-styles';

import Content from './components/Content';
import Header from './components/Header';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';

class App extends Component {
    render() {
        return (
            <Content>
                <Header>
                    <HeaderLeft>
                        <h1>Jake Kinsella</h1>
                    </HeaderLeft>

                    <HeaderRight>
                        <h2>Software Developer</h2>
                    </HeaderRight>
                </Header>
            </Content>
        );
    }
}

export default App;
