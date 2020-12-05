import * as React from 'react';
import { capitalize } from 'lodash';
import { ButtonContainer } from 'components/Container';
import { ControlPanelButton } from 'components/Button';
import { Typography } from '@material-ui/core';

export const ControlPanel = (): JSX.Element => {
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
    <>
      <Typography variant="h4">Control Panel</Typography>
      <ButtonContainer>
        {actions.map((action) => (
          <ControlPanelButton key={action} onClick={() => handleClick(action)}>
            {capitalize(action)}
          </ControlPanelButton>
        ))}
      </ButtonContainer>
    </>
  );
};
