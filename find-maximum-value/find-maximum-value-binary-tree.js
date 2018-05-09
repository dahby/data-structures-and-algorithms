'use strict';

let max = 0;
const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  if (rootNode.value > max) {
    max = rootNode.value;
  }
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return max;
};

const findMaximumValue = (tree) => {
  if (!tree.root) {
    return undefined;
  }
  return preOrderTraversal(tree.root);
};

export default findMaximumValue;
