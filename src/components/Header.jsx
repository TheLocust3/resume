import styled from 'react-emotion';

import { colors } from '../constants';

let Header = styled('div')`
    position: relative;

    padding-top: 1%;
    padding-bottom: 5px;

    border-bottom: 1px ${colors.borderBlack} solid;
`;

export default Header;
