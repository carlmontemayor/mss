import { Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { ControlPanel } from 'components/ControlPanel';
import { GraphContainer } from 'components/Container';
import { DefaultGraph } from 'components/Graph';
import { TopNavigation } from 'components/TopNavigation';
import { FlowElement } from 'react-flow-renderer';
import {
  CoolSimulation,
  ComplicatedSimulation,
  IntricateSimulation,
} from 'simulations';
import React from 'react';

type SimulationType = 'cool' | 'intricate' | 'complicated';

export const CoolGraph = (): JSX.Element => {
  const [simulations] = React.useState<Array<SimulationType>>([
    'cool',
    'intricate',
    'complicated',
  ]);

  const [elements, setElements] = React.useState<Array<FlowElement>>(
    CoolSimulation
  );

  const handleSimulationChange = (simulationType: SimulationType) => {
    switch (simulationType) {
      case 'cool':
        setElements(CoolSimulation);
        break;
      case 'complicated':
        setElements(ComplicatedSimulation);
        break;
      case 'intricate':
        setElements(IntricateSimulation);
        break;

      default:
        break;
    }
  };

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
            <Grid container>
              <Grid xs={1} item />
              <Grid xs={10} item>
                <DefaultGraph simulationElements={elements} />
              </Grid>
              <Grid xs={1} item />
            </Grid>
          </Grid>
          <Grid xs={2} item>
            <ControlPanel
              simulations={simulations}
              handleSimulationChange={handleSimulationChange}
            />
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
