import * as React from 'react';
import { capitalize } from 'lodash';
import { ButtonContainer } from 'components/Container';
import { ControlPanelButton } from 'components/Button';

export const ControlPanel = (): JSX.Element => {
  const [actions] = React.useState<Array<string>>(['run', 'create', 'delete']);

  return (
    <ButtonContainer>
      {actions.map((action) => (
        <ControlPanelButton key={action} onClick={() => console.log(action)}>
          {capitalize(action)}
        </ControlPanelButton>
      ))}
    </ButtonContainer>
  );
};
