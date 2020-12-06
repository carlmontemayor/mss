import * as React from 'react';
import ReactFlow, { Background, FlowElement } from 'react-flow-renderer';
import CustomNode from '../Node/CustomNode';

const nodeTypes = {
  selectorNode: CustomNode,
};

interface DefaultGraphProps {
  simulationElements: Array<FlowElement>;
}

export const DefaultGraph: React.FC<DefaultGraphProps> = ({
  simulationElements,
}): JSX.Element => {
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
        elements={simulationElements}
        deleteKeyCode={46}
        defaultZoom={2}
      >
        <Background gap={16} size={0.75} />
      </ReactFlow>
    </div>
  );
};
