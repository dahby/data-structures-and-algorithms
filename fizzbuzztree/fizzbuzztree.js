'use strict';


const fizzBuzzTree = (tree) => {
  let fizzBuzzOutput = '';
  const inOrderTraversal = (rootNode) => {
    if (!rootNode) {
      return undefined;
    }
    inOrderTraversal(rootNode.left);
    if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
      rootNode.value = 'fizzbuzz';
    } else if (rootNode.value % 3 === 0) {
      rootNode.value = 'fizz';
    } else if (rootNode.value % 5 === 0) {
      rootNode.value = 'buzz';
    } else {
      rootNode.value = rootNode.value;
    }
    fizzBuzzOutput += rootNode.value.toString();
    inOrderTraversal(rootNode.right);
    return fizzBuzzOutput;
  };
  return tree;
};

export default fizzBuzzTree;
