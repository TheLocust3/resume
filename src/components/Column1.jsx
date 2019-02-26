import styled from 'react-emotion';

import { colors } from '../constants';

let Column1 = styled('div')`
  position: absolute;
  left: 2%;

  width: 30%;
  height: 90%;

  margin-top: 2%;
  padding-top: 2px;

  border-right: 1px ${colors.borderBlack} solid;

  font-size: 13px;
`;

export default Column1;
