export const IntricateSimulation = [
  {
    id: '1',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'PostgreSQL' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 50, y: 50 },
  },
  {
    id: '2',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'MySQL' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 50, y: 175 },
  },
  {
    id: '3',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Redis Cache' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 50, y: 275 },
  },
  {
    id: '4',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'GraphQL' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 250, y: 100 },
  },
  {
    id: '5',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'RESTFul API' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 250, y: 150 },
  },
  {
    id: '6',
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
    id: '7',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Client Website' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 400, y: 150 },
  },
  {
    id: '8',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Legacy Angular App' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 400, y: 250 },
  },
  {
    id: '9',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'User(s)' },
    style: {
      border: '2px solid green',
      padding: 10,
      height: 150,
    },
    position: { x: 575, y: 100 },
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
    id: 'a1-5',
    source: '1',
    target: '5',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a1-u',
    source: '1',
    target: '4',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a2-4',
    source: '2',
    target: '4',
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
  {
    id: 'a3-4',
    source: '3',
    target: '4',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a3-5',
    source: '3',
    target: '5',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a4-6',
    source: '4',
    target: '6',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a5-7',
    source: '5',
    target: '7',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a5-8',
    source: '5',
    target: '8',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a6-9',
    source: '6',
    target: '9',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a7-9',
    source: '7',
    target: '9',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a8-9',
    source: '8',
    target: '9',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
];
