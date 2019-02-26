import React, { Component } from 'react';

import Column2 from '../components/Column2';
import ColumnContent from '../components/ColumnContent';
import DividingContent from '../components/DividingContent';

import Headline from '../components/Headline';

class RightColumn extends Component {
  render() {
    return (
      <Column2>
        <ColumnContent>
          <DividingContent>
            <Headline>Technical Experience</Headline>
            <br />
            <br />

            <div>
              <div>
                <h3>CandidateXYZ - Founder</h3>
                <i>Reading, MA - March 2018 to September 2018</i>
              </div>
              <br />

              <ul>
                <li>
                  Worked full time over the summer of my senior year to build out the company and
                  find customers for my product
                </li>
                <li>
                  Built a web app designed to remove the artificial barriers of running for local
                  political office
                </li>
                <li>
                  Automated campaign finance laws and made it easy to register to run for office.
                </li>
              </ul>
            </div>
            <br />

            <div>
              <div>
                <h3>Talla - Web Development Intern</h3>
                <i>Boston, MA - June 2017 to August 2017</i>
              </div>
              <br />

              <ul>
                <li>
                  Worked as a software engineering intern at a chatbot machine learning startup
                </li>
                <li>
                  Built out a data annotation platform that would allow them to import Slack
                  conversations and rate whether Talla's (their chatbot) response was correct or not
                  and what it should be.
                </li>
                <li>
                  This allowed their data scientists to rapidly improve their product and allowed
                  them to outsource data annotation to those outside the company, speeding up the
                  rate at which they could build their product.
                </li>
              </ul>
            </div>
            <br />

            <div>
              <div>
                <h3>Nutonian - QA Engineering Intern</h3>
                <i>Boston, MA - June 2016 to August 2016</i>
              </div>
              <br />

              <ul>
                <li>
                  Worked as a QA Engineering Intern at a general purpose machine learning startup
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
              <div>
                <h3>CloudHealth Tech - Software Engineering Intern</h3>
                <i>Boston, MA - June 2014 to August 2015 (over two summers)</i>
              </div>
              <br />

              <ul>
                <li>Worked as a software engineering intern in a cloud management startup</li>
                <li>Developed an an invoice generator for customers</li>
                <li>
                  Involed in all phases of software development from implementation to deployment,
                  and participated in an Agile team
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
              <div>
                <h3>Custom CPU Emulator</h3>
              </div>
              <br />

              <ul>
                <li>
                  Emulates a custom CPU with a limited instruction set, and built an assembler for
                  the CPU
                </li>
                <li>
                  Designed a custom CPU and made hundreds of design designs for the custom stack
                </li>
                <li>Currently working on higher-level langauges and more functionality</li>
              </ul>
            </div>
            <br />

            <div>
              <div>
                <h3>Intel 8080 Emulator</h3>
              </div>
              <br />

              <ul>
                <li>Developed an Intel 8080 CPU emulator in C</li>
                <li>Emulates the Intel 8080 CPU based on the original Intel specification</li>
                <li>Fully tested instruction set and CPU interrupts</li>
              </ul>
            </div>
          </div>
        </ColumnContent>
      </Column2>
    );
  }
}

export default RightColumn;
