import React, { Component } from 'react';

import './global-styles';

import Content from './components/Content';

import Header from './components/Header';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';

import Column1 from './components/Column1';
import Column2 from './components/Column2';
import ColumnContent from './components/ColumnContent';

import Headline from './components/Headline';

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

                <div style={{ position: 'relative' }}>
                    <Column1>
                        <ColumnContent>
                            <Headline>Contact</Headline>
                            <br />

                            <Headline>Education</Headline>
                            <br />

                            <Headline>Coursework</Headline>
                            <br />

                            <Headline>Languages</Headline>
                            <br />

                            <Headline>Software</Headline>
                            <br />

                            <Headline>Hackathons</Headline>
                            <br />

                            <Headline>Interests</Headline>
                            <br />
                        </ColumnContent>
                    </Column1>

                    <Column2>
                        <ColumnContent>
                            <Headline>Technical Experience</Headline>
                            <br />

                            <Headline>Teaching Experience</Headline>
                            <br />

                            <Headline>Projects and Creations</Headline>
                            <br />
                        </ColumnContent>
                    </Column2>
                </div>
            </Content>
        );
    }
}

export default App;
