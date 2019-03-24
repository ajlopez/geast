
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

exports['create arguments node'] = function (test) {
    const result = geast.arguments([ 1, 2, 3 ]);

    test.ok(result),
    test.equal(typeof result, 'object');
    test.deepEqual(result.arguments(), [ 1, 2, 3 ]);
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
    const result = geast.conditional(geast.constant(42), geast.constant(3), geast.constant(4));

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.condition().value(), 42);
    test.equal(result.then().value(), 3);
    test.equal(result.else().value(), 4);
};

exports['create loop node'] = function (test) {
    const result = geast.loop(geast.constant(42), geast.constant(3));

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.condition().value(), 42);
    test.equal(result.body().value(), 3);
};

exports['create call node'] = function (test) {
    const result = geast.call(geast.name('factorial'), [ geast.constant(42) ]);

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.target().name(), 'factorial');
    test.ok(Array.isArray(result.arguments()));
    test.equal(result.arguments().length, 1);
    test.equal(result.arguments()[0].value(), 42);
};

exports['create indexed node'] = function (test) {
    const result = geast.indexed(geast.name('primes'), geast.constant(42));

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.target().name(), 'primes');
    test.equal(result.index().value(), 42);
};

exports['create for node'] = function (test) {
    const result = geast.for(1, 2, 3, 4);

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.pre(), 1);
    test.equal(result.condition(), 2);
    test.equal(result.post(), 3);
    test.equal(result.body(), 4);
};

exports['create function node'] = function (test) {
    const result = geast.function('foo', ['a', 'b'], 42, 'int');

    test.ok(result),
    test.equal(typeof result, 'object');
    test.equal(result.name(), 'foo');
    test.deepEqual(result.arguments(), [ 'a', 'b' ]);
    test.equal(result.body(), 42);
    test.equal(result.return(), 'int');
};

exports['create continue node'] = function (test) {
    const result = geast.continue();

    test.ok(result),
    test.equal(typeof result, 'object');
};

exports['create break node'] = function (test) {
    const result = geast.break();

    test.ok(result),
    test.equal(typeof result, 'object');
};

