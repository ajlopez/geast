
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

exports['create argument node'] = function (test) {
    const result = geast.argument('a', 'int');

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

exports['create property node'] = function (test) {
    const result = geast.property('a', 'b');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.expression(), 'a');
    test.equal(result.name(), 'b');
};

exports['create binary node'] = function (test) {
    const result = geast.binary('+', 'a', 'b');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.operator(), '+');
    test.equal(result.left(), 'a');
    test.equal(result.right(), 'b');
};

exports['create unary node'] = function (test) {
    const result = geast.unary('!', 'a');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.operator(), '!');
    test.equal(result.expression(), 'a');
};

