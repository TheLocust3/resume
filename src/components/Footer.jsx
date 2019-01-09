import styled from 'react-emotion';

import { colors } from '../constants';

let Footer = styled('div')`
  position: absolute;
  bottom: 0;
  left: 5vw;

  width: 90vw;

  padding-top: 2px;

  border-top: 1px ${colors.borderBlack} solid;
`;

export default Footer;
