import { Button, Grid, Typography } from '@material-ui/core';
import { SimpleContainer } from 'components/Container';
import { DefaultGraph } from 'components/Graph';

export const CoolGraph = (): JSX.Element => {
  return (
    <Grid container>
      <Grid xs={12} item>
        <DefaultGraph />
      </Grid>
      hello
      <Grid xs={12} item>
        <Typography variant="h4">Control Panel</Typography>
        <SimpleContainer>
          <Button variant="contained">ADD</Button>
          <Button variant="contained">REMOVE</Button>
          <Button variant="contained">MODIFY</Button>
        </SimpleContainer>
      </Grid>
    </Grid>
  );
};

export default CoolGraph;
