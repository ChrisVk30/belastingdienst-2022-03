function comNS(ns) {
  let splitted = ns.split('.');

  let parent = global;    // or window when used in browser
  for (let part of splitted) {
    parent[part] = parent[part] || {};
    parent = parent[part];
  }

  return parent;
}

(function (ns) {
  ns.getSize = function () {
    return 'getSize() works!';
  };
})(comNS('com.infoSupport.projectX.v1.model'));

(function (ns) {
  ns.getHeight = function () {
    return 'getHeight() works too!';
  };
})(comNS('com.infoSupport.projectX.v1.model'));

console.log('The namespace:', com);
console.log('dynamically built namespace:', com.infoSupport.projectX.v1.model.getSize());
console.log('dynamically built namespace(reuse if it already exists):', com.infoSupport.projectX.v1.model.getHeight());