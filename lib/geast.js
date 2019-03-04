
function ConstantNode(value, type) {
    this.value = function ()  { return value; };
    this.type = function () { return type; };
}

function createConstant(value, type) {
    return new ConstantNode(value, type);
}

function VariableNode(name, type) {
    this.name = function () { return name; };
    this.type = function () { return type; };
}

function createVariable(name, type) {
    return new VariableNode(name, type);
}

function ArgumentNode(name, type) {
    this.name = function () { return name; };
    this.type = function () { return type; };
}

function createArgument(name, type) {
    return new ArgumentNode(name, type);
}

function AssignmentNode(lefthand, value) {
    this.lefthand = function () { return lefthand; };
    this.value = function () { return value; };
}

function createAssignment(lefthand, value) {
    return new AssignmentNode(lefthand, value);
}

function NameNode(name) {
    this.name = function () { return name; };
}

function createName(name) {
    return new NameNode(name);
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

module.exports = {
    constant: createConstant,
    variable: createVariable,
    argument: createArgument,
    assignment: createAssignment,
    name: createName,
    property: createProperty,
    binary: createBinary,
    unary: createUnary,
    sequence: createSequence,
    conditional: createConditional,
    loop: createLoop,
    call: createCall,
    for: createFor
}

