
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

module.exports = {
    constant: createConstant,
    variable: createVariable
}

