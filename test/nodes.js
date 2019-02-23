
const geast = require('..');

exports['create constant'] = function (test) {
    const result = geast.constant(42, 'int');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.value(), 42);
    test.equal(result.type(), 'int');
};

