
const geast = require('..');

exports['simple values to object'] = function (test) {
    test.strictEqual(geast.toObject(null), null);
    test.strictEqual(geast.toObject(42), 42);
    test.strictEqual(geast.toObject('foo'), 'foo');
    test.strictEqual(geast.toObject(true), true);
    test.strictEqual(geast.toObject(false), false);
};

exports['simple arrays to object'] = function (test) {
    test.deepEqual(geast.toObject([]), []);
    test.deepEqual(geast.toObject([ 1, 4, 9 ]), [ 1, 4, 9 ]);
};

exports['nodes to object'] = function (test) {
    test.deepEqual(geast.toObject(geast.constant(42)), { ntype: 'constant', value: 42 });
    test.deepEqual(geast.toObject(geast.binary('+', geast.constant(2), geast.constant(40))), 
        { 
            ntype: 'binary', 
            operator: '+',
            left: {
                ntype: 'constant',
                value: 2
            },
            right: {
                ntype: 'constant',
                value: 40
            }
        }
    );
test.deepEqual(geast.toObject(geast.arguments([ geast.constant(2), geast.constant(40) ])), 
        {
            ntype: 'arguments',
            arguments: [
                {   
                    ntype: 'constant',
                    value: 2
                },
                {
                    ntype: 'constant',
                    value: 40
                }
            ]
        }
    );
};

