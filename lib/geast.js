
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

module.exports = {
    constant: createConstant,
    variable: createVariable,
    argument: createArgument,
    assignment: createAssignment,
    name: createName
}

