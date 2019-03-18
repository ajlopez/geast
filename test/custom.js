
const geast = require('..');

exports['define and create custom node'] = function (test) {
    geast.node('custom', [ 'foo', 'bar' ]);
    
    const result = geast.custom(42, 1);
    
    test.ok(result);
    test.equal(typeof result, 'object');
    test.equal(result.ntype(), 'custom');
    test.equal(result.foo(), 42);
    test.equal(result.bar(), 1);
    
    let processed = false;
    
    result.process({ processCustom: function (node) {
        test.equal(node, result);
        processed = true;
    }});
    
    test.ok(processed);
};

exports['create constant node and add new property'] = function (test) {
    const result = geast.constant(42, 3);

    result.define('processed');
    
    test.strictEqual(result.processed(), null);
    
    result.processed(true);
    
    test.strictEqual(result.processed(), true);
};
