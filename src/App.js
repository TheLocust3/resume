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
import ContactItem from './components/ContactItem';
import UnstyledLink from './components/UnstyledLink';

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
                            <div>
                                <Headline>Contact</Headline>

                                <ContactItem iconProps={{ icon: 'envelope' }}>
                                    <UnstyledLink href="emailto:kinsella.j@husky.neu.edu">kinsella.j@huskey.neu.edu</UnstyledLink>
                                </ContactItem>

                                <ContactItem iconProps={{ icon: 'phone' }}>781-315-5580</ContactItem>

                                <ContactItem iconProps={{ icon: 'github', brand: true }}>
                                    <UnstyledLink href="https://github.com/TheLocust3">TheLocust3</UnstyledLink>
                                </ContactItem>

                                <ContactItem iconProps={{ icon: 'location-arrow' }}>Boston, MA</ContactItem>

                                <ContactItem iconProps={{ icon: 'calendar-alt' }}>Available Jan - June 2019</ContactItem>
                            </div>
                            <br />

                            <div>
                                <Headline>Education</Headline>
                                <br />
                                Northeastern University, Boston, MA
                                <br />
                                BS in Computer Science
                                <br />
                                First Year Student
                                <br />
                                Expected Graduation: 2022
                            </div>
                            <br />

                            <div>
                                <Headline>Dev Skills</Headline>
                                <br />
                                <b>Skillful:</b> Git, Java, Ruby, React/Javascript/CSS
                                <br />
                                <b>Proficient:</b> NodeJS, Python, Lua, AWS
                                <br />
                                <b>Familiar:</b> C<br />
                            </div>
                            <br />
                        </ColumnContent>
                    </Column1>

                    <Column2>
                        <ColumnContent>
                            <div>
                                <Headline>Technical Experience</Headline>
                                <br />
                                <br />

                                <div>
                                    <p>
                                        <h3>Talla - Web Development Intern</h3>
                                        <i>Boston, MA - June 2017 to August 2017</i>
                                    </p>

                                    <ul>
                                        <li>Worked as a software engineering intern at a chatbot machine learning startup</li>
                                        <li>
                                            Built out a data annotation platform that would allow them to import Slack conversations and rate whether
                                            Talla's (their chatbot) response was correct or not and what it should be.
                                        </li>
                                        <li>
                                            This allowed their data scientists to rapidly improve their product and allowed them to outsource data
                                            annotation to those outside the company, speeding up the rate at which they could build their product.
                                        </li>
                                    </ul>
                                </div>
                                <br />

                                <div>
                                    <p>
                                        <h3>Nutonian - Software QA Intern</h3>
                                        <i>Boston, MA - June 2016 to August 2016</i>
                                    </p>

                                    <ul>
                                        <li>Worked as a Software QA Intern at a general purpose machine learning startup</li>
                                        <li>Built their performance testing suite which allowed them to track their API performance over time</li>
                                        <li>
                                            Maintained many fully automated Selenium tests, learning how to develop strong automated browser tests and
                                            testable websites.
                                        </li>
                                    </ul>
                                </div>
                                <br />

                                <div>
                                    <p>
                                        <h3>CloudHealth Technologies - Software Engineering Intern</h3>
                                        <i>Boston, MA - June 2014 to August 2015 (over two summers)</i>
                                    </p>

                                    <ul>
                                        <li>Worked as a software engineering intern in a cloud management startup</li>
                                        <li>Developed an an invoice generator for customers</li>
                                        <li>
                                            Involed in all phases of software development from implementation to deployment, and participated in an
                                            Agile team
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <br />

                            <div>
                                <Headline>Projects and Creations</Headline>
                                <br />
                                <br />

                                <div>
                                    <p>
                                        <h3>candidateXYZ</h3>
                                    </p>

                                    <ul>
                                        <li>
                                            Worked full time over the summer of my senior year to build out the company and find customers for my
                                            product
                                        </li>
                                        <li>Built a web app designed to remove the artificial barriers of running for local political office</li>
                                        <li>Automated campaign finance laws and made it easy to register to run for office.</li>
                                    </ul>
                                </div>
                                <br />

                                <div>
                                    <p>
                                        <h3>Intel 8080 Emulator</h3>
                                    </p>

                                    <ul>
                                        <li>Developed an Intel 8080 CPU emulator in C</li>
                                        <li>Emulates the Intel 8080 CPU based on the original Intel specification</li>
                                        <li>Fully tested instruction set and CPU interrupts</li>
                                    </ul>
                                </div>
                                <br />

                                <div>
                                    <p>
                                        <h3>Gameboy Emulator</h3>
                                    </p>

                                    <ul>
                                        <li>Built a Gameboy Classic emulator for my graphing calculator</li>
                                        <li>
                                            Dealt with emulating the Assembly Language operations of a Gameboy, as well as with clock speed
                                            translation on a very limited calculator API
                                        </li>
                                        <li>Did extensive research and learned about emulators and CPU architecture</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                        </ColumnContent>
                    </Column2>
                </div>
            </Content>
        );
    }
}

export default App;
