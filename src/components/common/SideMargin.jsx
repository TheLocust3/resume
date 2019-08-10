import styled from 'react-emotion';

let SideMargin = styled('div')`
  margin-left: ${(props) => props.margin};
  margin-right: ${(props) => props.margin};
`;

export default SideMargin;
