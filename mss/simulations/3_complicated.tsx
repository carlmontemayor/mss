// Represents a very complex simulation and set of nodes
export const ComplicatedSimulation = [
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
    data: { label: 'customNode', type: 'Redis' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 50, y: 100 },
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
    data: { label: 'customNode', type: 'PostgreSQL' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 50, y: 200 },
  },
  {
    id: '5',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'PostgreSQL' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 50, y: 250 },
  },
  {
    id: '6',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Catalog Service' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 200, y: 50 },
  },
  {
    id: '7',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Basket Service' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 200, y: 100 },
  },
  {
    id: '8',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Auth Service' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 200, y: 150 },
  },
  {
    id: '9',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Ordering Service' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 200, y: 200 },
  },
  {
    id: '10',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Analytics Service' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 200, y: 250 },
  },
  {
    id: '11',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'API Gateway' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 525, y: 150 },
  },
  {
    id: '12',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Mobile Gateway' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 375, y: 100 },
  },
  {
    id: '13',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Web Gateway' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 375, y: 200 },
  },
  {
    id: '14',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'RESTful API' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 650, y: 100 },
  },
  {
    id: '15',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'GraphQL' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 650, y: 200 },
  },
  {
    id: '16',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Mobile App' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 825, y: 200 },
  },
  {
    id: '17',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Web Client' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 825, y: 50 },
  },
  {
    id: '18',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'Web SPA Client' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
    },
    position: { x: 825, y: 125 },
  },
  {
    id: '19',
    type: 'selectorNode',
    data: { label: 'customNode', type: 'User(s)' },
    style: {
      border: '2px solid green',
      borderRadius: 3,
      padding: 10,
      height: 200,
    },
    position: { x: 975, y: 50 },
  },
  {
    id: 'a1-6',
    source: '1',
    target: '6',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a2-7',
    source: '2',
    target: '7',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a3-8',
    source: '3',
    target: '8',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a4-9',
    source: '4',
    target: '9',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a5-10',
    source: '5',
    target: '10',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a6-13',
    source: '6',
    target: '13',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a7-13',
    source: '7',
    target: '13',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a8-13',
    source: '8',
    target: '13',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a9-13',
    source: '9',
    target: '13',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a10-13',
    source: '10',
    target: '13',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a6-12',
    source: '6',
    target: '12',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a7-12',
    source: '7',
    target: '12',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a8-12',
    source: '8',
    target: '12',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a9-12',
    source: '9',
    target: '12',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a10-12',
    source: '10',
    target: '12',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a12-11',
    source: '12',
    target: '11',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a13-11',
    source: '13',
    target: '11',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a11-14',
    source: '11',
    target: '14',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a11-15',
    source: '11',
    target: '15',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a14-16',
    source: '14',
    target: '16',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a14-17',
    source: '14',
    target: '17',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a14-18',
    source: '14',
    target: '18',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a15-16',
    source: '15',
    target: '16',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a15-17',
    source: '15',
    target: '17',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a15-18',
    source: '15',
    target: '18',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a16-19',
    source: '16',
    target: '19',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a17-19',
    source: '17',
    target: '19',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
  {
    id: 'a18-19',
    source: '18',
    target: '19',
    animated: true,
    style: {
      stroke: 'blue',
    },
  },
];
