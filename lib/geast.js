
function defineNode(name, names) {
    let uname = name[0].toUpperCase() + name.substring(1);
 
    return function (values) {
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

const ConstantNode = defineNode('constant', [ 'value', 'type' ]);
const VariableNode = defineNode('variable', [ 'name', 'type' ]);
const ArgumentNode = defineNode('argument', [ 'name', 'type' ]);
const ArgumentsNode = defineNode('arguments', [ 'arguments' ]);
const AssignmentNode = defineNode('assignment', [ 'lefthand', 'value' ]);
const NameNode = defineNode('name', [ 'name' ]);
const PropertyNode = defineNode('property', [ 'expression', 'name' ]);
const BinaryNode = defineNode('binary', [ 'operator', 'left', 'right' ]);
const UnaryNode = defineNode('unary', [ 'operator', 'expression' ]);
const SequenceNode = defineNode('sequence', [ 'nodes' ]);
const ConditionalNode = defineNode('conditional', [ 'condition', 'body' ]);
const LoopNode = defineNode('loop', [ 'condition', 'body' ]);
const CallNode = defineNode('call', [ 'target', 'arguments' ]);
const ForNode = defineNode('for', [ 'pre', 'condition', 'post', 'body' ]);
const DefineNode = defineNode('define', [ 'arguments', 'body' ]);

function createConstant() {
    return new ConstantNode(arguments);
}

function createVariable() {
    return new VariableNode(arguments);
}

function createArgument() {
    return new ArgumentNode(arguments);
}

function createArguments() {
    return new ArgumentsNode(arguments);
}

function createAssignment() {
    return new AssignmentNode(arguments);
}

function createName(name) {
    return new NameNode(arguments);
}

function createProperty() {
    return new PropertyNode(arguments);
}

function createBinary() {
    return new BinaryNode(arguments);
}

function createUnary() {
    return new UnaryNode(arguments);
}

function createSequence() {
    return new SequenceNode(arguments);
}

function createConditional() {
    return new ConditionalNode(arguments);
}

function createLoop() {
    return new LoopNode(arguments);
}

function createCall() {
    return new CallNode(arguments);
}

function createFor() {
    return new ForNode(arguments);
}

function createDefine() {
    return new DefineNode(arguments);
}

module.exports = {
    constant: createConstant,
    variable: createVariable,
    argument: createArgument,
    arguments: createArguments,
    assignment: createAssignment,
    name: createName,
    property: createProperty,
    binary: createBinary,
    unary: createUnary,
    sequence: createSequence,
    conditional: createConditional,
    loop: createLoop,
    call: createCall,
    for: createFor,
    define: createDefine
}

