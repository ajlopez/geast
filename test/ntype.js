
const geast = require('..');

function nodeType(test, name) {
    test.equal(geast[name]().ntype(), name);
}

exports['node types'] = function (test) {
    nodeType(test, 'constant');
    nodeType(test, 'variable');
    nodeType(test, 'argument');
    nodeType(test, 'arguments');
    nodeType(test, 'assign');
    nodeType(test, 'name');
    nodeType(test, 'property');
    nodeType(test, 'binary');
    nodeType(test, 'sequence');
    nodeType(test, 'conditional');
    nodeType(test, 'loop');
    nodeType(test, 'call');
    nodeType(test, 'for');
    nodeType(test, 'function');
    nodeType(test, 'break');
    nodeType(test, 'continue');
};

