
function defineNode(name, names) {
    return function (values) {
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

function CallNode(target, args) {
    this.target = function () { return target; };
    this.arguments = function () { return args; };
}

function createCall(target, args) {
    return new CallNode(target, args);
}

function ForNode(pre, cond, post, body) {
    this.pre = function () { return pre; };
    this.condition = function () { return cond; };
    this.post = function () { return post; };
    this.body = function () { return body; };
}

function createFor(pre, cond, post, body) {
    return new ForNode(pre, cond, post, body);
}

function DefineNode(args, body) {
    this.arguments = function () { return args; };
    this.body = function () { return body; };
}

function createDefine(args, body) {
    return new DefineNode(args, body);
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

