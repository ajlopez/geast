
function defineNode(name, names) {
    let uname = name[0].toUpperCase() + name.substring(1);
 
    exports[name] = function () { return new Node(arguments); };
    
    function Node(values) {
        const internal = {};
        
        this.ntype = function () { return name; };
        
        this.process = function (processor) {
            return processor['process' + uname](this);
        }
        
        this.define = function (name) {
            this[name] = makeNewAccesor();
        }
        
        for (var k = 0; k < names.length; k++)
            this[names[k]] = makeAccesor(k);

        this.define('lexer');
        
        function makeAccesor(n) {
            return function(newvalue) { 
                if (newvalue !== undefined)
                    values[n] = newvalue;
                else
                    return values[n] 
            };
        }
        
        function makeNewAccesor(n) {
            internal[n] = null;
            
            return function(newvalue) { 
                if (newvalue !== undefined)
                    internal[n] = newvalue;
                else
                    return internal[n]; 
            };
        }
    }
}

defineNode('constant', [ 'value', 'type' ]);
defineNode('variable', [ 'name', 'type', 'expression' ]);
defineNode('argument', [ 'name', 'type' ]);
defineNode('arguments', [ 'arguments' ]);
defineNode('assign', [ 'lefthand', 'expression' ]);
defineNode('name', [ 'name' ]);
defineNode('property', [ 'expression', 'name' ]);
defineNode('binary', [ 'operator', 'left', 'right' ]);
defineNode('unary', [ 'operator', 'expression' ]);
defineNode('sequence', [ 'nodes' ]);
defineNode('conditional', [ 'condition', 'then', 'else' ]);
defineNode('loop', [ 'condition', 'body' ]);
defineNode('call', [ 'target', 'arguments' ]);
defineNode('indexed', [ 'target', 'index' ]);
defineNode('for', [ 'pre', 'condition', 'post', 'body' ]);
defineNode('function', [ 'name', 'type', 'arguments', 'body' ]);
defineNode('continue', [ ]);
defineNode('break', [ ]);
defineNode('return', [ 'expression' ]);
defineNode('array', [ 'type', 'length' ]);
defineNode('method', [ 'name', 'type', 'visibility', 'arguments', 'body' ]);

exports.node = defineNode;

