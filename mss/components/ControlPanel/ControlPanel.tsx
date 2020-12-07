// Imports
import * as React from 'react';
import { FlowElement } from 'react-flow-renderer';
import { capitalize, toNumber } from 'lodash';
import {
  ButtonContainer,
  ControlPanelButtonContainer,
  ControlPanelContainer,
} from 'components/Container';
import { ControlPanelButton } from 'components/Button';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { random } from 'lodash';
import { ModifyNodes } from 'utils';
import { CoolSimulation } from 'simulations';

// Constants for our simulations
const NumComplicatedSimulationNodes = 19;
const NumCoolSimulationNodes = 4;
const NumIntricateSimulationNodes = 8;

// Re-specified type for simulations
type SimulationType = 'simple' | 'intricate' | 'complicated';

// Interface for our ControlPanelProps
// These are the specific types that must be passed in as props to our ControlPanel
interface ControlPanelProps {
  simulations: SimulationType[];
  handleSimulationChange: (simulationType: SimulationType) => void;
  simulationElements: FlowElement[];
  simulationType: SimulationType;
  setElements: React.Dispatch<React.SetStateAction<FlowElement[]>>;
}

// ControlPanel controls the simulation
export const ControlPanel: React.FC<ControlPanelProps> = ({
  simulations,
  handleSimulationChange,
  simulationElements,
  simulationType,
  setElements,
}): JSX.Element => {
  // FindRandomNode takes in a simulation type and finds a number within the specified range
  const FindRandomNode = (simulationType: SimulationType): Number => {
    switch (simulationType) {
      case 'simple':
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

  // This resets the current canvas/graphs to the basic one initially given
  const handleResetClick = () => {
    window.location.reload();
  };

  // Iterates through the nodes and finds a randomly failing node.
  // This colors the aproppriate node and their incoming and outgoing edges
  const handleClick = () => {
    // Find a random node
    const failedNodeIndex = toNumber(FindRandomNode(simulationType));

    // Color the random node red; this node is deemed as faulty
    var failedNode = simulationElements[failedNodeIndex];
    failedNode.style = {
      border: '2px solid red',
    };

    // Modify the current elements
    let newSimulationElements = [...simulationElements];
    newSimulationElements[failedNodeIndex] = failedNode;

    // Iterate through the elements to find which edges to color red
    ModifyNodes(newSimulationElements, failedNodeIndex);

    // Wait a second until resetting the nodes
    setTimeout(() => {
      setElements(newSimulationElements);
    }, 1000);
  };

  return (
    <ControlPanelContainer>
      <Typography align="center" variant="h4">
        Control Panel
      </Typography>
      <ControlPanelButtonContainer>
        <ButtonGroup size="small">
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
