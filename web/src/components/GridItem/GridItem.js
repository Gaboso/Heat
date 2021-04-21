import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import {variables} from '../Theme'

const StyledGrid = styled(Grid)`
  && {
    margin-bottom: 0.3em;
    margin-top: 0.3em;
    line-height: ${variables.lhSm};
  }
`;

const GridItem = ({children}) =>
  (
    <StyledGrid container
                item
                spacing={1}
                direction="column">
      {children}
    </StyledGrid>
  )

export default GridItem;