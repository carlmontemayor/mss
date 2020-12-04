import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { ControlPanel } from 'components/ControlPanel';
import { GraphContainer } from 'components/Container';
import { DefaultGraph } from 'components/Graph';
import { TopNavigation } from 'components/TopNavigation';
import React from 'react';

// make a node component

export const CoolGraph = (): JSX.Element => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <TopNavigation position="static">
          <Toolbar>
            <Typography variant="h6">MSS - Microservice Simulation</Typography>
          </Toolbar>
        </TopNavigation>
      </Grid>
      <GraphContainer xs={12} item>
        <Grid container>
          <Grid xs={10} item>
            <DefaultGraph />
          </Grid>
          <Grid xs={2} item>
            <ControlPanel />
          </Grid>
        </Grid>
      </GraphContainer>
      <Grid xs={12} item>
        <Paper>footer</Paper>
      </Grid>
    </Grid>
  );
};

export default CoolGraph;
