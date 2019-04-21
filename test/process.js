
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

async function asyncProcess(test, name) {
    let processed = false;
    
    let processor = {};
    
    processor["process" + name[0].toUpperCase() + name.substring(1)] = async function (node) {
        processed = true;
        test.equal(node.ntype(), name);
        
        const promise = new Promise((resolve, reject) =>
            setTimeout(function () { resolve(true); }, 0)
        );
        
        return promise;
    };
    
    const result = await geast[name]().process(processor);
    
    test.strictEqual(result, true);
    
    test.ok(processed);
    test.done();
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
    process(test, 'return');
    process(test, 'array');
    process(test, 'method');
    process(test, 'eval');
};

exports['async process with procesor'] = async function (test) {
    await asyncProcess(test, 'constant');
    await asyncProcess(test, 'variable');
    await asyncProcess(test, 'argument');
    await asyncProcess(test, 'arguments');
    await asyncProcess(test, 'assign');
    await asyncProcess(test, 'name');
    await asyncProcess(test, 'property');
    await asyncProcess(test, 'binary');
    await asyncProcess(test, 'sequence');
    await asyncProcess(test, 'conditional');
    await asyncProcess(test, 'loop');
    await asyncProcess(test, 'call');
    await asyncProcess(test, 'for');
    await asyncProcess(test, 'function');
    await asyncProcess(test, 'continue');
    await asyncProcess(test, 'break');
    await asyncProcess(test, 'return');
    await asyncProcess(test, 'array');
    await asyncProcess(test, 'method');
    await asyncProcess(test, 'eval');
};

