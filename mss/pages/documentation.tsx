import Head from 'next/head';

export const Documentation = (): JSX.Element => (
  <div>
    <Head>
      <title>Documentation - How to Run</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Documentation - CPE 400 Project</h1>

      <h2>How to run our simulation:</h2>

      <p>
        On the graph, you are able to create new nodes and connect them however
        you please. When you have created all the nodes you would want, you can
        run a simulation with our test button. This will run the simulation of
        how each node will interact.
      </p>

      <p>
        When you see how each node interacts with one another, you are then able
        to crash one of the nodes, or simulate if one were to fail. When you run
        the test again, you can see how it will function if one or more nodes
        fail.
      </p>

      <p>
        <i>pictures to be added...</i>
      </p>
    </main>
  </div>
);

export default Documentation;
