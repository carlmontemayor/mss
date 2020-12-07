// Represents a basic simulation
export const CoolSimulation = [
  {
    id: '1',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'RESTful API' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 200, y: 150 },
  },
  {
    id: '2',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'React Frontend' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 400, y: 250 },
  },
  {
    id: '3',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'PostgreSQL' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 50, y: 150 },
  },
  {
    id: '4',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Client Dashboard' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 400, y: 50 },
  },
  {
    id: '5',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'User(s)' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      height: 140,
      padding: 10,
    },
    position: { x: 575, y: 100 },
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
      stroke: 'blue',
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
  {
    id: 'a4-5',
    source: '4',
    target: '5',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a2-5',
    source: '2',
    target: '5',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
];
