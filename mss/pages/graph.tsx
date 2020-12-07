import { Divider, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { ControlPanel } from 'components/ControlPanel';
import { GraphContainer } from 'components/Container';
import { DefaultGraph } from 'components/Graph';
import { TopNavigation } from 'components/TopNavigation';
import { Edge, FlowElement } from 'react-flow-renderer';
import Link from 'next/link';

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
  const [simulationType, setSimulationType] = React.useState<SimulationType>(
    'complicated'
  );

  const [elements, setElements] = React.useState<Array<FlowElement | Edge>>(
    ComplicatedSimulation
  );

  const handleSimulationChange = (simulationType: SimulationType) => {
    switch (simulationType) {
      case 'cool':
        setSimulationType('cool');
        setElements(CoolSimulation);
        break;
      case 'complicated':
        setSimulationType('complicated');
        setElements(ComplicatedSimulation);
        break;
      case 'intricate':
        setSimulationType('intricate');
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
            <Grid container>
              <Grid xs={2} item>
                <Link href="/">
                  <a>
                    <Typography variant="h6">
                      MSS - Microservice Simulation
                    </Typography>
                  </a>
                </Link>
              </Grid>
              <Grid xs={2} item>
                <Link href="/documentation">
                  <Typography variant="h6">Documentation</Typography>
                </Link>
              </Grid>
              <Grid xs={2} item>
                <Link href="/report">
                  <Typography variant="h6">Problem Statement</Typography>
                </Link>
              </Grid>
              <Grid xs={2} item>
                <Link href="/">
                  <Typography variant="h6"></Typography>
                </Link>
              </Grid>
              <Grid xs={2} item>
                <Typography variant="h6">Github Repo</Typography>
              </Grid>
              <style jsx>{`
                footer {
                  width: 100%;
                  height: 100px;
                  border-top: 1px solid #eaeaea;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }

                a {
                  color: inherit;
                  text-decoration: none;
                }
              `}</style>
            </Grid>
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
              simulationElements={elements}
              simulationType={simulationType}
              setElements={setElements}
            />
          </Grid>
        </Grid>
      </GraphContainer>
      <Grid xs={12} item>
        <footer>
          Made by Curtis Chung + Carl Montemayor w/ ❤️ <br /> CPE 400 - Dynamic
          Routing in a Faulty Network
        </footer>
        <style jsx>{`
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}</style>
      </Grid>
    </Grid>
  );
};

export default CoolGraph;
