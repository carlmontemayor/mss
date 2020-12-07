// Import file
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

// Contains styled versions of HTML containers
export const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const SimpleContainer = styled('div')({
  border: 0,
  borderRadius: 2,
  color: 'white',
  height: 48,
  display: 'flex',
});

export const ControlPanelContainer = styled('div')({
  border: '2px solid black',
  borderRadius: 3,
});

export const GraphContainer = styled(Grid)({
  marginTop: 20,
});

export const ControlPanelButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > *': {
    margin: 12,
  },
});
