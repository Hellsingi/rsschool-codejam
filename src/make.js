module.exports = function make(...a) {
  const array = [];
  array.push(...a);
  return function ret() {
    if (typeof arguments[0] !== 'function') { 
      array.push(...arguments); 
      return ret; 
    }
    else return array.reduce(arguments[0]);
  }
} 