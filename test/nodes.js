
const geast = require('..');

exports['create constant node'] = function (test) {
    const result = geast.constant(42, 'int');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.value(), 42);
    test.equal(result.type(), 'int');
};

exports['create variable node'] = function (test) {
    const result = geast.variable('a', 'int');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.name(), 'a');
    test.equal(result.type(), 'int');
};

