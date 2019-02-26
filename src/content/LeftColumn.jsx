import React, { Component } from 'react';

import Column1 from '../components/Column1';
import ColumnContent from '../components/ColumnContent';

import Headline from '../components/Headline';
import ContactItem from '../components/ContactItem';
import UnstyledLink from '../components/UnstyledLink';

class LeftColumn extends Component {
  render() {
    return (
      <Column1>
        <ColumnContent>
          <div>
            <Headline>Contact</Headline>
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

            <UnstyledLink href="https://www.google.com/maps/place/21+Forsyth+St,+Boston,+MA+02115/@42.3404599,-71.0931809,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a18cdb8879b:0x7bb8e3318e6fa898!8m2!3d42.3404599!4d-71.0909922">
              <ContactItem iconProps={{ icon: 'location-arrow' }}>
                21 Forsyth St, Boston, MA 02115
              </ContactItem>
            </UnstyledLink>

            <ContactItem iconProps={{ icon: 'calendar-alt' }}>Available summer of 2019</ContactItem>
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
    );
  }
}

export default LeftColumn;
