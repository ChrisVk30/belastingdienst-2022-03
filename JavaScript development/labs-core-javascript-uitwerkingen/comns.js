
function comNS(nsString) {
    let splits = nsString.split('.');

    let node = globalThis;

    for (let split of splits) {
        node[split] = node[split] || {};
        node = node[split];
    }

    return node;
}

!function (ns) {
    console.log(ns);

    ns.getSize = function () {
        return 'getSize() works!';
    };
}(comNS("com.infoSupport.projx.v1.model"));

console.log(com.infoSupport.projx.v1.model.getSize());
