import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';

export const CoolGraph = (): JSX.Element => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">MSS - Microservice Simulation</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid xs={12} item>
        <Paper>graph</Paper>
      </Grid>
      <Grid xs={1} item />
      <Grid xs={10} item>
        <Paper>Control Panel</Paper>
      </Grid>
      <Grid xs={1} item />
      <Grid xs={12} item>
        <Paper>footer</Paper>
      </Grid>

      {/**
      <Grid xs={12} item>
        <DefaultGraph />
      </Grid>
      <Grid xs={12} item>
        <Typography variant="h4">Control Panel</Typography>
        <SimpleContainer>
          <Button variant="contained">ADD</Button>
          <Button variant="contained">REMOVE</Button>
          <Button variant="contained">MODIFY</Button>
        </SimpleContainer>
      </Grid>
       * 
       */}
    </Grid>
  );
};

export default CoolGraph;
