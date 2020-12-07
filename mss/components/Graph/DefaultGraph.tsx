// Imports
import * as React from 'react';
import ReactFlow, { Background, FlowElement } from 'react-flow-renderer';
import CustomNode from '../Node/CustomNode';

// A definition of custom nodes for ReactFlowRenderer
const nodeTypes = {
  selectorNode: CustomNode,
};

// The aproppriate types for our graph component
interface DefaultGraphProps {
  simulationElements: Array<FlowElement>;
}

// DefaultGraph is a basic version of the ReactFlowRenderer
export const DefaultGraph: React.FC<DefaultGraphProps> = ({
  simulationElements,
}): JSX.Element => {
  return (
    <div
      style={{
        height: 700,
        border: '2px solid black',
        marginBottom: 50,
        borderRadius: 5,
      }}
    >
      <ReactFlow
        nodeTypes={nodeTypes}
        elements={simulationElements}
        deleteKeyCode={46}
        defaultZoom={1.5}
      >
        <Background gap={16} size={0.75} />
      </ReactFlow>
    </div>
  );
};
