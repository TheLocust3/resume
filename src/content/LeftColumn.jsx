import React, { Component } from 'react';

import Column1 from '../components/Column1';
import ColumnContent from '../components/ColumnContent';

import Headline from '../components/Headline';
import ContactItem from '../components/ContactItem';
import UnstyledLink from '../components/common/UnstyledLink';
import SideMargin from '../components/common/SideMargin';

class LeftColumn extends Component {
  render() {
    return (
      <Column1>
        <ColumnContent>
          <p>
            <Headline>Contact</Headline>

            <SideMargin margin="5%">
              <UnstyledLink href="mailto:jake.kinsella@gmail.com">
                <ContactItem iconProps={{ icon: 'envelope' }}>jake.kinsella@gmail.com</ContactItem>
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

              <UnstyledLink href="https://goo.gl/maps/95HT2ksKtEryHBaX7">
                <ContactItem iconProps={{ icon: 'location-arrow' }}>
                  40 Leon Street, Boston, MA 02115
                </ContactItem>
              </UnstyledLink>

              <ContactItem iconProps={{ icon: 'calendar-alt' }}>
                Available for Co-op from January - June 2020
              </ContactItem>
            </SideMargin>
          </p>
          <br />

          <div>
            <Headline>Education</Headline>

            <SideMargin margin="3%">
              <p>Northeastern University, Boston, MA</p>
              <p>Khoury College of Computer Science</p>
              <p>Candidate for a Bachelor of Sceience degree in Computer Science (2022)</p>
              <p>GPA: 3.72/4.0</p>
            </SideMargin>
          </div>
          <br />

          <div>
            <Headline>Dev Skills</Headline>

            <SideMargin margin="3%">
              <p>
                <b>Proficient:</b> Scala, React, Javascript, HTML/CSS, Java, Ruby
              </p>
              <p>
                <b>Familiar:</b> NodeJS, Python, Lua, AWS Services, Data Streaming
              </p>
              <p>
                <b>Other:</b> C, Rust, Kafka, Elasticsearch, PostgreSQL, Distributed Systems
              </p>
            </SideMargin>
          </div>
          <br />

          <div>
            <Headline>Extracurriculars</Headline>

            <SideMargin margin="3%">
              <UnstyledLink href="https://www.406ventures.com/about">
                .406 Ventures Student Fellow
              </UnstyledLink>
              <br />
              <UnstyledLink href="https://web.northeastern.edu/generate/">
                Studio Engineer at Generate
              </UnstyledLink>
              <br />
              Northeastern Toastmasters
              <br />
              Husky Startup Challenge
              <br />
              <UnstyledLink href="http://www.northeastern.edu/entrepreneurs/">
                Entrepreneurship Club
              </UnstyledLink>
              <br />
              <UnstyledLink href="https://robockets.weebly.com/">
                FRC Team 4761 (high school robotics)
              </UnstyledLink>
            </SideMargin>
          </div>
          <br />

          <div>
            <Headline>Volunteering</Headline>

            <SideMargin margin="3%">
              <p>Mentor at the Clubhouse Network</p>
              <p>FIRST Lego League Coach for Middle school students</p>
              <p>FIRST Robotics Field Reset volunteer</p>
            </SideMargin>
          </div>
          <br />
        </ColumnContent>
      </Column1>
    );
  }
}

export default LeftColumn;
