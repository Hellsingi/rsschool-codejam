module.exports = function recursion(tree) {
  const closure = [];
  const f = (node, i = 0) => {
    if (closure[i]) closure[i].push(node.value);
    else closure[i] = [node.value];
    if (node.left && node.right) {
      f(node.left, i + 1);
      f(node.right, i + 1);
    }
  };
  f(tree);
  return closure;
};
