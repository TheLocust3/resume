import styled from 'react-emotion';

import { colors } from '../constants';

let Column1 = styled('div')`
  position: absolute;
  left: 2%;

  width: 30%;
  height: 95%;

  margin-top: 0.5%;
  padding-top: 2px;

  border-right: 1px ${colors.borderBlack} solid;

  font-size: 13px;
`;

export default Column1;
