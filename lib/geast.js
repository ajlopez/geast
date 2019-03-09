
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

function PropertyNode(expr, name) {
    this.expression = function () { return expr; };
    this.name = function () { return name; };
}

function createProperty(expr, name) {
    return new PropertyNode(expr, name);
}

function BinaryNode(oper, left, right) {
    this.operator = function () { return oper; };
    this.left = function () { return left; };
    this.right = function () { return right; };
}

function createBinary(oper, left, right) {
    return new BinaryNode(oper, left, right);
}

function UnaryNode(oper, expr) {
    this.operator = function () { return oper; };
    this.expression = function () { return expr; };
}

function createUnary(oper, expr) {
    return new UnaryNode(oper, expr);
}

function SequenceNode(nodes) {
    this.nodes = function () { return nodes; };
}

function createSequence(nodes) {
    return new SequenceNode(nodes);
}

function ConditionalNode(cond, body) {
    this.condition = function () { return cond; };
    this.body = function () { return body; };
}

function createConditional(cond, body) {
    return new ConditionalNode(cond, body);
}

function LoopNode(cond, body) {
    this.condition = function () { return cond; };
    this.body = function () { return body; };
}

function createLoop(cond, body) {
    return new LoopNode(cond, body);
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

