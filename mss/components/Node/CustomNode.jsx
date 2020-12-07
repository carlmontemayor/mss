// Imports
import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

// Returns a customized node
export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ background: '#555' }}
      />
      <div>
        <strong>{data.type}</strong>
      </div>
      <Handle
        type="target"
        position="left"
        id="b"
        style={{ background: '#555' }}
      />
    </>
  );
});
