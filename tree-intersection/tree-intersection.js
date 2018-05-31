'use strict';

const treeMap = new Map();
let output = [];

const firstTreeTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  firstTreeTraversal(rootNode.left);
  treeMap.set(rootNode.value, 1);
  firstTreeTraversal(rootNode.right);
  return treeMap;
};

const secondTreeTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  secondTreeTraversal(rootNode.left);
  if (treeMap.get(rootNode.value) && !output.includes(rootNode.value)) {
    output.push(rootNode.value);
  }
  secondTreeTraversal(rootNode.left);
  return undefined;
};

const treeIntersection = (tree1, tree2) => {
  if (!tree1.root || !tree2.root) {
    return undefined;
  }
  firstTreeTraversal(tree1.root);
  output = [];
  secondTreeTraversal(tree2.root);
  return output;
};

export default treeIntersection;
