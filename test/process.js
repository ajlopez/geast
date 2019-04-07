
const geast = require('..');

function process(test, name) {
    let processed = false;
    
    let processor = {};
    
    processor["process" + name[0].toUpperCase() + name.substring(1)] = function (node) {
        processed = true;
        test.equal(node.ntype(), name);
        return true;
    };
    
    test.strictEqual(geast[name]().process(processor), true);
    
    test.ok(processed);
}

exports['process with procesor'] = function (test) {
    process(test, 'constant');
    process(test, 'variable');
    process(test, 'argument');
    process(test, 'arguments');
    process(test, 'assign');
    process(test, 'name');
    process(test, 'property');
    process(test, 'binary');
    process(test, 'sequence');
    process(test, 'conditional');
    process(test, 'loop');
    process(test, 'call');
    process(test, 'for');
    process(test, 'function');
    process(test, 'continue');
    process(test, 'break');
    process(test, 'array');
    process(test, 'method');
};

