export const ModifyNodes = (newSimulationElements, failedNodeIndex) => {
  newSimulationElements.forEach((element) => {
    const adjustedFailedNodeIndex = failedNodeIndex + 1;
    // I wish I did the types correctly
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
