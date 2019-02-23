
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

exports['create assignment node'] = function (test) {
    const result = geast.assignment('a', 42);

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.lefthand(), 'a');
    test.equal(result.value(), 42);
};

exports['create name node'] = function (test) {
    const result = geast.name('a');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.name(), 'a');
};

