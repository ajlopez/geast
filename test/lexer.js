
const geast = require('..');

function lexer(test, name) {
    const node = geast[name]();
    
    test.ok(node);
    test.ok(node.lexer);
    test.equal(typeof node.lexer, 'function');
    test.equal(node.lexer(), null);
    
    node.lexer({ name: name });
    
    test.deepEqual(node.lexer(), { name: name });
}

exports['has lexer property'] = function (test) {
    lexer(test, 'constant');
    lexer(test, 'variable');
    lexer(test, 'argument');
    lexer(test, 'arguments');
    lexer(test, 'assign');
    lexer(test, 'name');
    lexer(test, 'property');
    lexer(test, 'binary');
    lexer(test, 'sequence');
    lexer(test, 'conditional');
    lexer(test, 'loop');
    lexer(test, 'call');
    lexer(test, 'for');
    lexer(test, 'function');
    lexer(test, 'continue');
    lexer(test, 'break');
    lexer(test, 'return');
    lexer(test, 'array');
    lexer(test, 'method');
    lexer(test, 'eval');
};

