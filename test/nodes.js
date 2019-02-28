
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

exports['create sequence node'] = function (test) {
    const result = geast.sequence([ geast.constant(42), geast.constant(3) ]);

    test.ok(result),
    test.equal(typeof result, 'object');
    test.ok(result.nodes());
    test.ok(Array.isArray(result.nodes()));
    test.equal(result.nodes().length, 2);
    test.equal(result.nodes()[0].value(), 42);
    test.equal(result.nodes()[1].value(), 3);
};

exports['create conditional node'] = function (test) {
    const result = geast.conditional(geast.constant(42), geast.constant(3));

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.condition().value(), 42);
    test.equal(result.body().value(), 3);
};

