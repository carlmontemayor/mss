import { Divider, Typography } from '@material-ui/core';
import { ControlPanelContainer } from 'components/Container';
import React from 'react';

export const InfoPanel = (): JSX.Element => {
  return (
    <ControlPanelContainer>
      <Typography align="center" variant="h4">
        InfoPanel
      </Typography>
      <Divider />
      <Typography align="center" variant="h6">
        <strong>Directions: </strong>
        Choose from one of the types of simulations above:{' '}
        <strong>simple</strong>, <strong>intricate</strong>,{' '}
        <strong>complicated</strong>. Click run to see the simulation create a
        faulty node and notice how the data flow changes. See what happens when
        the complexity increases. Take a look at our documentation, repo, and
        report above.
        <strong>NOTE:</strong> Although there named "microservices" as opposed
        to generic nodes, this can ideally represent any set of nodes or graphs.
      </Typography>
    </ControlPanelContainer>
  );
};
