import * as React from 'react';
import ReactFlow, { Background } from 'react-flow-renderer';

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'PostgreSQL' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    data: { label: 'API' },
    position: { x: 100, y: 125 },
  },
];

export const DefaultGraph = (): JSX.Element => {
  const [elements] = React.useState(initialElements);

  return (
    <div style={{ height: 750, border: '1px solid black', marginBottom: 50 }}>
      <ReactFlow elements={elements}>
        <Background gap={16} size={0.75} />
      </ReactFlow>
    </div>
  );
};
