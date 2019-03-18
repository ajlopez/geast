
const geast = require('..');

exports['create constant node and change field'] = function (test) {
    const result = geast.constant(42, 'int');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.value(), 42);
    test.equal(result.type(), 'int');
    
    result.type('float');
    
    test.equal(result.type(), 'float');
    
    result.type(null);
    
    test.strictEqual(result.type(), null);
};

