import React, { Component } from 'react';

import './global-styles';

import Content from './components/Content';

import Header from './components/Header';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';

import Column1 from './components/Column1';
import Column2 from './components/Column2';
import ColumnContent from './components/ColumnContent';

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

                <div>
                    <Column1>
                        <ColumnContent>Column</ColumnContent>
                    </Column1>

                    <Column2>
                        <ColumnContent>Column</ColumnContent>
                    </Column2>
                </div>
            </Content>
        );
    }
}

export default App;
