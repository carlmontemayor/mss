import * as React from 'react';
import { capitalize } from 'lodash';
import {
  ButtonContainer,
  ControlPanelButtonContainer,
  ControlPanelContainer,
} from 'components/Container';
import { ControlPanelButton } from 'components/Button';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
type SimulationType = 'cool' | 'intricate' | 'complicated';

interface ControlPanelProps {
  simulations: SimulationType[];
  handleSimulationChange: (simulationType: SimulationType) => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  simulations,
  handleSimulationChange,
}): JSX.Element => {
  const [actions] = React.useState<Array<string>>([
    'run',
    'create',
    'delete',
    'add',
  ]);

  const handleClick = (action: string) => {
    switch (action) {
      case 'run':
        break;
      case 'create':
        break;
      case 'delete':
        break;
      case 'add':
        break;
      default:
        break;
    }
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
        {actions.map((action) => (
          <ControlPanelButton key={action} onClick={() => handleClick(action)}>
            {capitalize(action)}
          </ControlPanelButton>
        ))}
      </ButtonContainer>
    </ControlPanelContainer>
  );
};
