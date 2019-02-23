
function ConstantNode(value, type) {
    this.value = function ()  { return value; };
    this.type = function () { return type; };
}

function createConstant(value, type) {
    return new ConstantNode(value, type);
}

module.exports = {
    constant: createConstant
}

