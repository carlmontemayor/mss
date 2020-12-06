import * as React from 'react';
import { Edge, FlowElement } from 'react-flow-renderer';
import { capitalize, toNumber } from 'lodash';
import {
  ButtonContainer,
  ControlPanelButtonContainer,
  ControlPanelContainer,
} from 'components/Container';
import {
  CoolSimulation,
  ComplicatedSimulation,
  IntricateSimulation,
} from 'simulations';
import { ControlPanelButton } from 'components/Button';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { random } from 'lodash';
const NumComplicatedSimulationNodes = 19;
const NumCoolSimulationNodes = 4;
const NumIntricateSimulationNodes = 8;
type SimulationType = 'cool' | 'intricate' | 'complicated';

interface ControlPanelProps {
  simulations: SimulationType[];
  handleSimulationChange: (simulationType: SimulationType) => void;
  simulationElements: FlowElement[];
  simulationType: SimulationType;
  setElements: React.Dispatch<React.SetStateAction<FlowElement[]>>;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  simulations,
  handleSimulationChange,
  simulationElements,
  simulationType,
  setElements,
}): JSX.Element => {
  const FindRandomNode = (simulationType: SimulationType): Number => {
    switch (simulationType) {
      case 'cool':
        return random(0, NumCoolSimulationNodes);
        break;
      case 'intricate':
        return random(0, NumIntricateSimulationNodes);
        break;
      case 'complicated':
        return random(0, NumComplicatedSimulationNodes);
        break;
      default:
        return 0;
        break;
    }
  };

  const handleResetClick = () => {
    console.log('resetting');
  };

  const handleClick = () => {
    const failedNodeIndex = toNumber(FindRandomNode(simulationType));
    console.log(failedNodeIndex);
    var failedNode = simulationElements[failedNodeIndex];
    console.log(failedNode);
    failedNode.style = {
      border: '2px solid red',
    };
    let newSimulationElements = [...simulationElements];
    newSimulationElements[failedNodeIndex] = failedNode;

    newSimulationElements.forEach((element) => {
      const adjustedFailedNodeIndex = failedNodeIndex + 1;
      // I wish I did the types correctly
      if (
        element.target === adjustedFailedNodeIndex.toString() ||
        element.source === adjustedFailedNodeIndex.toString()
      ) {
        element.animated = false;
        element.style = {
          stroke: 'red',
        };
      }
    });

    setTimeout(() => {
      setElements(newSimulationElements);
      // clear out the stuff
    }, 1000);
  };

  return (
    <ControlPanelContainer>
      <Typography variant="h4">Control Panel</Typography>
      <ControlPanelButtonContainer>
        <ButtonGroup size="medium">
          {simulations.map((simulation) => (
            <Button
              key={simulation}
              onClick={() => handleSimulationChange(simulation)}
            >
              {simulation}
            </Button>
          ))}
        </ButtonGroup>
      </ControlPanelButtonContainer>
      <ButtonContainer>
        <ControlPanelButton onClick={() => handleClick()}>
          {capitalize('run')}
        </ControlPanelButton>
        <ControlPanelButton onClick={() => handleResetClick()}>
          {capitalize('reset')}
        </ControlPanelButton>
      </ButtonContainer>
    </ControlPanelContainer>
  );
};
