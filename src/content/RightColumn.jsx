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
                      Redesigned event search feature using real-time streaming applications
                      processing billions of events, and Elasticsearch with team.
                    </li>
                    <li>
                      Refactored critical model library impacting many streaming jobs and worked to
                      rebuild + optimize those jobs.
                    </li>
                    <li>
                      Took on the responsibilities of a full software developer, leading production
                      deployments and playing critical roles in production incidents.
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
                      Founded candidateXYZ to allow municipal candidates to automate all of the
                      legal + administrative of running a campaign.
                    </li>
                    <li>
                      Built a web app designed to remove the bureaucratic barriers of running for
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
                      Created a data annotation platform that would allow Talla to import Slack
                      conversations and rate whether the chatbot's response was correct or not and
                      what it should be.
                    </li>
                    <li>
                      Facilitated data analysts' ability to rapidly iterate on the ML models
                      powering the product.
                    </li>
                    <li>Allowed the company to outsource data annotation to gig-workers.</li>
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
                      Automated performance testing, built a suite of tests to track API
                      performance.
                    </li>
                    <li>
                      Maintained/upgraded fully automated Selenium tests, and developed strong
                      automated browser tests and testable websites.
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
                      Developed an invoice generator for customers integrated with a Ruby on Rails
                      endpoint.
                    </li>
                    <li>
                      Contributed to all phases of software development from implementation to
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
                      Developed a task manager allowing users to map out tasks/goals as trees while
                      giving users the ability to track those goals in a column/card view (such as
                      Trello)
                    </li>
                    <li>
                      Built a webapp in Typescript/React with a Scala/Finangle API backed by Neo4j
                      and PostgreSQL
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
            </SideMargin>
          </div>
        </ColumnContent>
      </Column2>
    );
  }
}

export default RightColumn;
