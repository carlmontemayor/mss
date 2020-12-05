import * as React from 'react';
import ReactFlow, { Background, FlowElement } from 'react-flow-renderer';
import { CoolSimulation } from 'simulations';
import CustomNode from '../Node/CustomNode';

const nodeTypes = {
  selectorNode: CustomNode,
};
export const DefaultGraph = (): JSX.Element => {
  const [elements] = React.useState<Array<FlowElement>>(CoolSimulation);

  return (
    <div
      style={{
        height: 700,
        border: '1px solid black',
        marginBottom: 50,
      }}
    >
      <ReactFlow
        nodeTypes={nodeTypes}
        elements={elements}
        deleteKeyCode={46}
        defaultZoom={2}
      >
        <Background gap={16} size={0.75} />
      </ReactFlow>
    </div>
  );
};
