import * as React from 'react';
export const BasicSimulation = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          Welcome to <strong>React Flow!</strong>
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          This is a <strong>default node</strong>
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          This one has a <strong>custom style</strong>
        </>
      ),
    },
    position: { x: 400, y: 100 },
    style: {
      background: '#D6D5E6',
      color: '#333',
      border: '1px solid #222138',
      width: 180,
    },
  },
  {
    id: '4',
    position: { x: 250, y: 200 },
    data: {
      label: 'Another default node',
    },
  },
  {
    id: '5',
    data: {
      label: 'Node id: 5',
    },
    position: { x: 250, y: 325 },
  },
  {
    id: '6',
    type: 'output',
    data: {
      label: (
        <>
          An <strong>output node</strong>
        </>
      ),
    },
    position: { x: 100, y: 480 },
  },
  {
    id: '7',
    type: 'output',
    data: { label: 'Another output node' },
    position: { x: 400, y: 450 },
  },
  { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },
  { id: 'e1-3', source: '1', target: '3' },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    label: 'animated edge',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    label: 'edge with arrow head',
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    label: 'smooth step edge',
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    type: 'step',
    style: { stroke: '#f6ab6c' },
    label: 'a step edge',
    animated: true,
    labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
  },
  {
    id: '8',
    type: 'selectorNode',
    data: { label: 'customNode', color: 'blahk' },
    style: {
      border: '1px solid black',
      padding: 10,
    },
    position: { x: 500, y: 550 },
  },
];

export const CoolSimulation = [
  {
    id: '1',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'RESTful API' },
    style: {
      border: '1px solid black',
      padding: 10,
    },
    position: { x: 0, y: 150 },
  },
  {
    id: '2',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'React Frontend' },
    style: {
      border: '1px solid black',
      padding: 10,
    },
    position: { x: 200, y: 250 },
  },
  {
    id: '3',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'PostgreSQL' },
    style: {
      border: '1px solid black',
      padding: 10,
    },
    position: { x: 300, y: 50 },
  },
  {
    id: '4',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Client Dashboard' },
    style: {
      border: '1px solid black',
      padding: 10,
    },
    position: { x: 300, y: 100 },
  },
  {
    id: 'a1-3',
    source: '3',
    target: '1',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a1-2',
    source: '1',
    target: '2',
    animated: true,
    style: {
      stroke: 'red',
    },
  },
  {
    id: 'a1-4',
    source: '1',
    target: '4',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
];
