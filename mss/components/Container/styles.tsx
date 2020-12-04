import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const SimpleContainer = styled('div')({
  border: 0,
  borderRadius: 2,
  color: 'white',
  height: 48,
  display: 'flex',
});

export const GraphContainer = styled(Grid)({
  marginTop: 20,
});
