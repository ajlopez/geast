
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

module.exports = {
    constant: createConstant,
    variable: createVariable,
    argument: createArgument,
    assignment: createAssignment,
    name: createName,
    property: createProperty,
    binary: createBinary,
    unary: createUnary,
    sequence: createSequence
}

