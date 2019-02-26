import React, { Component } from 'react';

import './global-styles';

import Content from './components/Content';

import Header from './components/Header';
import HeaderLeft from './components/HeaderLeft';
import HeaderRight from './components/HeaderRight';

import Column1 from './components/Column1';
import Column2 from './components/Column2';
import ColumnContent from './components/ColumnContent';
import DividingContent from './components/DividingContent';
import Footer from './components/Footer';

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
                <UnstyledLink href="mailto:jake.kinsella@gmail.com">
                  <ContactItem iconProps={{ icon: 'envelope' }}>
                    jake.kinsella@gmail.com
                  </ContactItem>
                </UnstyledLink>

                <UnstyledLink href="tel:781-315-5580">
                  <ContactItem iconProps={{ icon: 'phone' }}>781-315-5580</ContactItem>
                </UnstyledLink>

                <UnstyledLink href="https://github.com/TheLocust3">
                  <ContactItem iconProps={{ icon: 'github', brand: true }}>TheLocust3</ContactItem>
                </UnstyledLink>

                <UnstyledLink href="http://jakekinsella.com">
                  <ContactItem iconProps={{ icon: 'desktop' }}>jakekinsella.com</ContactItem>
                </UnstyledLink>

                <UnstyledLink href="https://www.google.com/maps/place/21+Forsyth+St,+Boston,+MA+02115/@42.3404599,-71.0931809,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a18cdb8879b:0x7bb8e3318e6fa898!8m2!3d42.3404599!4d-71.0909922">
                  <ContactItem iconProps={{ icon: 'location-arrow' }}>
                    21 Forsyth St, Boston, MA 02115
                  </ContactItem>
                </UnstyledLink>

                <ContactItem iconProps={{ icon: 'calendar-alt' }}>
                  Available summer of 2019
                </ContactItem>
              </div>
              <br />

              <div>
                <Headline>Education</Headline>

                <p>
                  Northeastern University, Boston, MA
                  <br />
                  BS in Computer Science
                  <br />
                  First Year Student
                  <br />
                  Expected Graduation: 2022
                </p>
              </div>
              <br />

              <div>
                <Headline>Dev Skills</Headline>

                <p>
                  <b>Skillful:</b> React, Javascript, HTML/CSS, Java, Ruby
                </p>
                <p>
                  <b>Proficient:</b> NodeJS, Python Lua, AWS
                </p>
                <p>
                  <b>Familiar:</b> C, Rust
                </p>
              </div>
              <br />

              <div>
                <Headline>Clubs</Headline>

                <p>
                  Northeastern Toastmasters
                  <br />
                  Husky Startup Challenge
                  <br />
                  <UnstyledLink href="http://www.northeastern.edu/entrepreneurs/">
                    Entrepreneur Club
                  </UnstyledLink>
                  <br />
                  <UnstyledLink href="https://robockets.weebly.com/">
                    FRC Team 4761 (high school robotics)
                  </UnstyledLink>
                  <br />
                  Programming Club (high school)
                  <br />
                  Politics Club (high school)
                </p>
              </div>
              <br />

              <div>
                <Headline>Volunteering</Headline>

                <p>
                  Mentor at the Clubhouse Network
                  <br />
                  FIRST Lego League Coach for Middle school students
                  <br />
                  FIRST Robotics Field Reset volunteer
                </p>
              </div>
              <br />
            </ColumnContent>
          </Column1>

          <Column2>
            <ColumnContent>
              <DividingContent>
                <Headline>Technical Experience</Headline>
                <br />
                <br />

                <div>
                  <p>
                    <h3>CandidateXYZ - Founder</h3>
                    <i>Reading, MA - March 2018 to September 2018</i>
                  </p>

                  <ul>
                    <li>
                      Worked full time over the summer of my senior year to build out the company
                      and find customers for my product
                    </li>
                    <li>
                      Built a web app designed to remove the artificial barriers of running for
                      local political office
                    </li>
                    <li>
                      Automated campaign finance laws and made it easy to register to run for
                      office.
                    </li>
                  </ul>
                </div>
                <br />

                <div>
                  <p>
                    <h3>Talla - Web Development Intern</h3>
                    <i>Boston, MA - June 2017 to August 2017</i>
                  </p>

                  <ul>
                    <li>
                      Worked as a software engineering intern at a chatbot machine learning startup
                    </li>
                    <li>
                      Built out a data annotation platform that would allow them to import Slack
                      conversations and rate whether Talla's (their chatbot) response was correct or
                      not and what it should be.
                    </li>
                    <li>
                      This allowed their data scientists to rapidly improve their product and
                      allowed them to outsource data annotation to those outside the company,
                      speeding up the rate at which they could build their product.
                    </li>
                  </ul>
                </div>
                <br />

                <div>
                  <p>
                    <h3>Nutonian - QA Engineering Intern</h3>
                    <i>Boston, MA - June 2016 to August 2016</i>
                  </p>

                  <ul>
                    <li>
                      Worked as a QA Engineering Intern at a general purpose machine learning
                      startup
                    </li>
                    <li>
                      Built their performance testing suite which allowed them to track their API
                      performance over time
                    </li>
                    <li>
                      Maintained many fully automated Selenium tests, learning how to develop strong
                      automated browser tests and testable websites.
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
                      Involed in all phases of software development from implementation to
                      deployment, and participated in an Agile team
                    </li>
                  </ul>
                </div>
              </DividingContent>
              <br />
              <br />

              <div>
                <Headline>Projects and Creations</Headline>
                <br />
                <br />

                <div>
                  <p>
                    <h3>Custom CPU Emulator</h3>
                  </p>

                  <ul>
                    <li>
                      Emulates a custom CPU with a limited instruction set, and built an assembler
                      for the CPU
                    </li>
                    <li>
                      Designed a custom CPU and made hundreds of design designs for the custom stack
                    </li>
                    <li>Currently working on higher-level langauges and more functionality</li>
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
              </div>
            </ColumnContent>
          </Column2>
        </div>

        <Footer>
          <center>
            <i>References available upon request.</i>
          </center>
        </Footer>
      </Content>
    );
  }
}

export default App;
