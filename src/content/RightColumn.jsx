import React, { Component } from 'react';

import SideMargin from '../components/common/SideMargin';
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

            <SideMargin margin="2.5%">
              <div>
                <h4>Threat Stack - Data Engineering Intern</h4>

                <SideMargin margin="2.5%">
                  <i>Boston, MA - May 2019 to August 2019</i>

                  <ul>
                    <li>
                      Tasked with working on team building out event search using real-time
                      streaming applications processing billions of events, and Elasticsearch.
                    </li>
                    <li>
                      Obtained the responsibilities of a full software developer, dealt with highly
                      distributed systems and a microservice architecture.
                    </li>
                    <li>
                      Programmed streaming jobs and libraries used on hundreds of machines
                      processing mission critical, real time data.
                    </li>
                  </ul>
                </SideMargin>
              </div>
              <br />

              <div>
                <h4>CandidateXYZ - Founder</h4>

                <SideMargin margin="2.5%">
                  <i>Reading, MA - March 2018 to September 2018</i>

                  <ul>
                    <li>
                      Worked full time over the summer of senior year to create the company and find
                      customers for the product.
                    </li>
                    <li>
                      Built a web app designed to remove the artificial barriers of running for
                      local political office.
                    </li>
                    <li>
                      Automated campaign finance laws and made it easy to register to run for
                      office.
                    </li>
                  </ul>
                </SideMargin>
              </div>
              <br />

              <div>
                <h4>Talla - Web Development Intern</h4>

                <SideMargin margin="2.5%">
                  <i>Boston, MA - June 2017 to August 2017</i>

                  <ul>
                    <li>
                      Created a data annotation platform that would allow the comapany to import
                      Slack conversations and rate whether the chatbot's response was correct or not
                      and what it should be.
                    </li>
                    <li>
                      Gave the data scientists the ability to rapidly iterate on the ML models
                      powering the product and allowed the company to outsource data annotation to
                      gig-workers.
                    </li>
                  </ul>
                </SideMargin>
              </div>
              <br />

              <div>
                <h4>Nutonian - QA Engineering Intern</h4>

                <SideMargin margin="2.5%">
                  <i>Boston, MA - June 2016 to August 2016</i>

                  <ul>
                    <li>
                      Automated performance testing, building a suite of tests to track API
                      performance over time.
                    </li>
                    <li>
                      Maintained/added fully automated Selenium tests, learning how to develop
                      strong automated browser tests and testable websites.
                    </li>
                    <li>
                      Learned how to develop testable and verifiable software through a strong QA
                      team.
                    </li>
                  </ul>
                </SideMargin>
              </div>
              <br />

              <div>
                <h4>CloudHealth Tech - Software Engineering Intern</h4>

                <SideMargin margin="2.5%">
                  <i>Boston, MA - June 2014 to August 2015 (over two summers)</i>

                  <ul>
                    <li>
                      Developed an invoice generator for customers that could be called through a
                      Ruby on Rails API call.
                    </li>
                    <li>
                      Involved in all phases of software development from implementation to
                      deployment, and participated in an Agile team.
                    </li>
                  </ul>
                </SideMargin>
              </div>
            </SideMargin>
          </DividingContent>
          <br />

          <div>
            <Headline>Projects and Creations</Headline>
            <br />

            <SideMargin margin="5%">
              <div>
                <h4>Hierarchy</h4>
                <br />

                <SideMargin margin="2.5%">
                  <ul>
                    <li>
                      A task manager allowing users to map out tasks/goals as trees while giving
                      users the ability to track those goals in a column/card view (like Trello)
                    </li>
                    <li>
                      Typescript/React webapp with a Scala/Finangle API backed by Neo4j and
                      PostgreSQL
                    </li>
                    <li>
                      Currently under active development, trying to achieve feature parity with
                      Trello to then move personal task management over to it full time
                    </li>
                  </ul>
                </SideMargin>
              </div>
              <br />

              <div>
                <h4>Custom CPU Emulator</h4>
                <br />

                <SideMargin margin="2.5%">
                  <ul>
                    <li>
                      Emulates a custom CPU with a limited instruction set, and built an assembler
                      for the CPU
                    </li>
                    <li>
                      Designed a custom CPU and made hundreds of design decisions for the custom
                      stack
                    </li>
                  </ul>
                </SideMargin>
              </div>
              <br />

              <div>
                <h4>Intel 8080 Emulator</h4>
                <br />

                <SideMargin margin="2.5%">
                  <ul>
                    <li>Developed an Intel 8080 CPU emulator in C</li>
                    <li>Emulates the Intel 8080 CPU based on the original Intel specification</li>
                    <li>Fully tested instruction set and CPU interrupts</li>
                  </ul>
                </SideMargin>
              </div>
            </SideMargin>
          </div>
        </ColumnContent>
      </Column2>
    );
  }
}

export default RightColumn;
