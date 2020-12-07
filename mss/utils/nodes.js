// ModifyNodes takes in simulation elements and a specific index and checks
// if where in the array is there a connection between the failed node.
// The outgoing and incoming edges of the failed node are painted red
export const ModifyNodes = (newSimulationElements, failedNodeIndex) => {
  // Iterate over the array
  newSimulationElements.forEach((element) => {
    // Prevent a off-by-one error
    const adjustedFailedNodeIndex = failedNodeIndex + 1;

    // Paint the edges red if the element is conneced to the failed node
    if (
      element.target === adjustedFailedNodeIndex.toString() ||
      element.source === adjustedFailedNodeIndex.toString()
    ) {
      element.animated = false;
      element.style = {
        stroke: 'red',
      };
    }
  });
};
