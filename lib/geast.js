
function defineNode(name, names) {
    let uname = name[0].toUpperCase() + name.substring(1);
 
    exports[name] = function () { return new Node(arguments); };
    
    function Node(values) {
        this.ntype = function () { return name; };
        
        this.process = function (processor) {
            processor['process' + uname](this);
        }
        
        for (var k = 0; k < names.length; k++)
            this[names[k]] = makeAccesor(k);
        
        function makeAccesor(n) {
            return function() { return values[n] };
        }
    }
}

defineNode('constant', [ 'value', 'type' ]);
defineNode('variable', [ 'name', 'type' ]);
defineNode('argument', [ 'name', 'type' ]);
defineNode('arguments', [ 'arguments' ]);
defineNode('assignment', [ 'lefthand', 'value' ]);
defineNode('name', [ 'name' ]);
defineNode('property', [ 'expression', 'name' ]);
defineNode('binary', [ 'operator', 'left', 'right' ]);
defineNode('unary', [ 'operator', 'expression' ]);
defineNode('sequence', [ 'nodes' ]);
defineNode('conditional', [ 'condition', 'then', 'else' ]);
defineNode('loop', [ 'condition', 'body' ]);
defineNode('call', [ 'target', 'arguments' ]);
defineNode('for', [ 'pre', 'condition', 'post', 'body' ]);
defineNode('function', [ 'name', 'arguments', 'body', 'return' ]);

