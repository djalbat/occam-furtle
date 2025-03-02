"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _query = require("../utilities/query");
var _constants = require("../constants");
var _types = require("../types");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Value;
var match = _necessary.arrayUtilities.match;
var reduceValueNodeQuery = (0, _query.nodeQuery)("/reduce/value"), ternaryValueNodeQuery = (0, _query.nodeQuery)("/ternary/value"), numberTerminalNodeQuery = (0, _query.nodeQuery)("/value/@number"), primitiveTerminalNodeQuery = (0, _query.nodeQuery)("/value/@primitive"), returnStatementValueNodeQuery = (0, _query.nodeQuery)("/returnStatement/value"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/value/@string-literal"), variableAssignmentValueNodeQuery = (0, _query.nodeQuery)("/variableAssignment/value");
var _default = (0, _dom.domAssigned)((_Value = /*#__PURE__*/ function() {
    function Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue) {
        _class_call_check(this, Value);
        this.node = node;
        this.nodes = nodes;
        this.number = number;
        this.string = string;
        this.boolean = boolean;
        this.some = some;
        this.every = every;
        this.reduce = reduce;
        this.ternary = ternary;
        this.variable = variable;
        this.nodeQuery = nodeQuery;
        this.nodesQuery = nodesQuery;
        this.comparison = comparison;
        this.returnBlock = returnBlock;
        this.procedureCall = procedureCall;
        this.negatedValue = negatedValue;
        this.bitwiseValue = bitwiseValue;
        this.bracketedValue = bracketedValue;
    }
    _create_class(Value, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                return this.nodes;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                return this.boolean;
            }
        },
        {
            key: "getSome",
            value: function getSome() {
                return this.some;
            }
        },
        {
            key: "getEvery",
            value: function getEvery() {
                return this.every;
            }
        },
        {
            key: "getReduce",
            value: function getReduce() {
                return this.reduce;
            }
        },
        {
            key: "getTernary",
            value: function getTernary() {
                return this.ternay;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getNodeQuery",
            value: function getNodeQuery() {
                return this.nodeQuery;
            }
        },
        {
            key: "getNodesQuery",
            value: function getNodesQuery() {
                return this.nodesQuery;
            }
        },
        {
            key: "getComparison",
            value: function getComparison() {
                return this.comparison;
            }
        },
        {
            key: "getReturnBlock",
            value: function getReturnBlock() {
                return this.returnBlock;
            }
        },
        {
            key: "getProcedureCall",
            value: function getProcedureCall() {
                return this.procedureCall;
            }
        },
        {
            key: "getNegatedValue",
            value: function getNegatedValue() {
                return this.negatedValue;
            }
        },
        {
            key: "getBitwiseValue",
            value: function getBitwiseValue() {
                return this.bitwiseValue;
            }
        },
        {
            key: "getBracketedValue",
            value: function getBracketedValue() {
                return this.bracketedValue;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.node !== null) {
                    type = _types.NODE_TYPE;
                } else if (this.nodes !== null) {
                    type = _types.NODES_TYPE;
                } else if (this.number !== null) {
                    type = _types.NUMBER_TYPE;
                } else if (this.string !== null) {
                    type = _types.STRING_TYPE;
                } else if (this.boolean !== null) {
                    type = _types.BOOLEAN_TYPE;
                } else if (this.some !== null) {
                    type = this.some.getType();
                } else if (this.every !== null) {
                    type = this.every.getType();
                } else if (this.reduce !== null) {
                    type = this.reduce.getType();
                } else if (this.ternary !== null) {
                    type = this.ternary.getType();
                } else if (this.variable !== null) {
                    type = this.variable.getType();
                } else if (this.nodeQuery !== null) {
                    type = this.nodeQuery.getType();
                } else if (this.nodesQuery !== null) {
                    type = this.nodesQuery.getType();
                } else if (this.comparison !== null) {
                    type = this.comparison.getType();
                } else if (this.returnBlock !== null) {
                    type = this.returnBlock.getType();
                } else if (this.procedureCall !== null) {
                    type = this.procedureCall.getType();
                } else if (this.negatedValue !== null) {
                    type = this.negatedValue.getType();
                } else if (this.bitwiseValue !== null) {
                    type = this.bitwiseValue.getType();
                } else if (this.bracketedValue !== null) {
                    type = this.bracketedValue.getType();
                }
                return type;
            }
        },
        {
            key: "asString",
            value: function asString(context) {
                var string;
                if (false) {
                ///
                } else if (this.node !== null) {
                    string = nodeAsString(this.node, context);
                } else if (this.nodes !== null) {
                    string = nodesAsString(this.nodes, context);
                } else if (this.number !== null) {
                    string = numberAsString(this.number);
                } else if (this.string !== null) {
                    string = stringAsString(this.string);
                } else if (this.boolean !== null) {
                    string = booleanAsString(this.boolean);
                } else if (this.some !== null) {
                    string = this.some.getString();
                } else if (this.every !== null) {
                    string = this.every.getString();
                } else if (this.reduce !== null) {
                    string = this.reduce.getString();
                } else if (this.ternary !== null) {
                    string = this.ternary.getString();
                } else if (this.variable !== null) {
                    string = this.variable.getString();
                } else if (this.nodeQuery !== null) {
                    string = this.nodeQuery.getString();
                } else if (this.nodesQuery !== null) {
                    string = this.nodesQuery.getString();
                } else if (this.comparison !== null) {
                    string = this.comparison.getString();
                } else if (this.returnBlock !== null) {
                    string = this.returnBlock.getString();
                } else if (this.procedureCall !== null) {
                    string = this.procedureCall.getString();
                } else if (this.negatedValue !== null) {
                    string = this.negatedValue.getString();
                } else if (this.bitwiseValue !== null) {
                    string = this.bitwiseValue.getString();
                } else if (this.bracketedValue !== null) {
                    string = this.bracketedValue.getString();
                }
                return string;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                if (false) {
                ///
                } else if (this.node !== null || this.nodes !== null || this.number !== null || this.string !== null || this.boolean !== null) {
                    value = this;
                } else if (this.some !== null) {
                    value = this.some.evaluate(context);
                } else if (this.every !== null) {
                    value = this.every.evaluate(context);
                } else if (this.reduce !== null) {
                    value = this.reduce.evaluate(context);
                } else if (this.ternary !== null) {
                    value = this.ternary.evaluate(context);
                } else if (this.variable !== null) {
                    value = this.variable.evaluate(context);
                } else if (this.nodeQuery !== null) {
                    value = this.nodeQuery.evaluate(context);
                } else if (this.nodesQuery !== null) {
                    value = this.nodesQuery.evaluate(context);
                } else if (this.comparison !== null) {
                    value = this.comparison.evaluate(context);
                } else if (this.returnBlock !== null) {
                    value = this.returnBlock.evaluate(context);
                } else if (this.procedureCall !== null) {
                    value = this.procedureCall.evaluate(context);
                } else if (this.negatedValue !== null) {
                    value = this.negatedValue.evaluate(context);
                } else if (this.bitwiseValue !== null) {
                    value = this.bitwiseValue.evaluate(context);
                } else if (this.bracketedValue !== null) {
                    value = this.bracketedValue.evaluate(context);
                }
                return value;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(value) {
                var equalTo;
                if (false) {
                ///
                } else if (this.node !== null) {
                    var node = value.getNode();
                    if (node === null) {
                        equalTo = false;
                    } else {
                        var nodeA = this.node, nodeB = node, nodeMatches = matchNode(nodeA, nodeB);
                        equalTo = nodeMatches; ///
                    }
                } else if (this.nodes !== null) {
                    var nodes = value.getNode();
                    if (nodes === null) {
                        equalTo = false;
                    } else {
                        var nodesA = this.nodes, nodesB = nodes, nodesMatch = matchNodes(nodesA, nodesB);
                        equalTo = nodesMatch; ///
                    }
                } else if (this.number !== null) {
                    var number = value.getNumber();
                    equalTo = this.number === number;
                } else if (this.string !== null) {
                    var string = value.getString();
                    equalTo = this.string === string;
                } else if (this.boolean !== null) {
                    var boolean = value.getBoolean();
                    equalTo = this.boolean === boolean;
                } else {
                    debugger;
                }
                return equalTo;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                if (node === null) {
                    node = _nullNode.default;
                }
                var nodes = null, number = null, string = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
                return value;
            }
        },
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var node = null, number = null, string = null, boolean = null, ternary = null, some = null, every = null, reduce = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
                return value;
            }
        },
        {
            key: "fromString",
            value: function fromString(string, context) {
                var node = null, nodes = null, number = null, boolean = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
                return value;
            }
        },
        {
            key: "fromBoolean",
            value: function fromBoolean(boolean, context) {
                var node = null, nodes = null, number = null, string = null, some = null, every = null, reduce = null, ternary = null, variable = null, _$nodeQuery = null, nodesQuery = null, comparison = null, returnBlock = null, procedureCall = null, negatedValue = null, bitwiseValue = null, bracketedValue = null, value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
                return value;
            }
        },
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var value = valueFromValueNode(valueNode, context);
                return value;
            }
        },
        {
            key: "fromReduceNode",
            value: function fromReduceNode(reduceNode, context) {
                var reduceValueNode = reduceValueNodeQuery(reduceNode), valueNode = reduceValueNode, value = valueFromValueNode(valueNode, context);
                return value;
            }
        },
        {
            key: "fromTernaryNode",
            value: function fromTernaryNode(ternaryNode, context) {
                var ternaryValueNode = ternaryValueNodeQuery(ternaryNode), valueNode = ternaryValueNode, value = valueFromValueNode(valueNode, context);
                return value;
            }
        },
        {
            key: "fromReturnStatementNode",
            value: function fromReturnStatementNode(returnStatementNode, context) {
                var returnStatementValueNode = returnStatementValueNodeQuery(returnStatementNode), valueNode = returnStatementValueNode, value = valueFromValueNode(valueNode, context);
                return value;
            }
        },
        {
            key: "fromVariableAssignmentNode",
            value: function fromVariableAssignmentNode(variableAssigmentNode, context) {
                var variableAssignmentValueNode = variableAssignmentValueNodeQuery(variableAssigmentNode), valueNode = variableAssignmentValueNode, value = valueFromValueNode(valueNode, context);
                return value;
            }
        }
    ]);
    return Value;
}(), _define_property(_Value, "name", "Value"), _Value));
function matchNode(nodeA, nodeB) {
    var nodeMatches;
    if (nodeA === _nullNode.default || nodeB === _nullNode.default) {
        nodeMatches = nodeA === nodeB;
    } else {
        var nodeAEqualToNodeA = nodeA.isEqualTo(nodeB);
        nodeMatches = nodeAEqualToNodeA; ///
    }
    return nodeMatches;
}
function matchNodes(nodesA, nodesB) {
    var nodesMatch;
    nodesMatch = match(nodesA, nodesB, function(nodeA, nodeB) {
        var nodeMatches = matchNode(nodeA, nodeB);
        if (nodeMatches) {
            return true;
        }
    });
    return nodesMatch;
}
function nodeAsString(node, context) {
    var string;
    var nodeString = node === _nullNode.default ? _constants.NULL : context.nodeAsString(node);
    string = "'".concat(nodeString, "'");
    return string;
}
function nodesAsString(nodes, context) {
    var string;
    var nodesString = context.nodesAsString(nodes);
    string = "'".concat(nodesString, "'");
    return string;
}
function numberAsString(number) {
    var string;
    string = "".concat(number);
    return string;
}
function stringAsString(string) {
    string = '"'.concat(string, '"'); ///
    return string;
}
function booleanAsString(boolean) {
    var string;
    string = "'".concat(boolean, "'");
    return string;
}
function valueFromValueNode(valueNode, context) {
    var Some = _dom.default.Some, Every = _dom.default.Every, Reduce = _dom.default.Reduce, Value = _dom.default.Value, Ternary = _dom.default.Ternary, Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, Comparison = _dom.default.Comparison, ReturnBlock = _dom.default.ReturnBlock, ProcedureCall = _dom.default.ProcedureCall, NegatedValue = _dom.default.NegatedValue, BitwiseValue = _dom.default.BitwiseValue, BracketedValue = _dom.default.BracketedValue, node = nodeFromValueNode(valueNode, context), nodes = nodesFromValueNode(valueNode, context), number = numberFromValueNode(valueNode, context), string = stringFromValueNode(valueNode, context), boolean = booleanFromValueNode(valueNode, context), some = Some.fromValueNode(valueNode, context), every = Every.fromValueNode(valueNode, context), reduce = Reduce.fromValueNode(valueNode, context), ternary = Ternary.fromValueNode(valueNode, context), variable = Variable.fromValueNode(valueNode, context), _$nodeQuery = NodeQuery.fromValueNode(valueNode, context), nodesQuery = NodesQuery.fromValueNode(valueNode, context), comparison = Comparison.fromValueNode(valueNode, context), returnBlock = ReturnBlock.fromValueNode(valueNode, context), procedureCall = ProcedureCall.fromValueNode(valueNode, context), negatedValue = NegatedValue.fromValueNode(valueNode, context), bitwiseValue = BitwiseValue.fromValueNode(valueNode, context), bracketedValue = BracketedValue.fromValueNode(valueNode, context), value = new Value(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, _$nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedValue, bitwiseValue, bracketedValue);
    return value;
}
function nodeFromValueNode(valueNode, context) {
    var node = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        switch(primitiveTerminalNodeContent){
            case _constants.NULL:
                {
                    node = _nullNode.default;
                    break;
                }
        }
    }
    return node;
}
function nodesFromValueNode(valueNode, context) {
    var nodes = null; ///
    return nodes;
}
function numberFromValueNode(valueNode, context) {
    var number = null;
    var numberTerminalNode = numberTerminalNodeQuery(valueNode);
    if (numberTerminalNode !== null) {
        var numberTerminalNodeContent = numberTerminalNode.getContent();
        number = Number(numberTerminalNodeContent);
    }
    return number;
}
function stringFromValueNode(valueNode, context) {
    var string = null;
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(valueNode);
    if (stringLiteralTerminalNode !== null) {
        var stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(), stringLiteral = stringLiteralTerminalNodeContent; ///
        string = stringFromStringLiteral(stringLiteral, context);
    }
    return string;
}
function booleanFromValueNode(valueNode, context) {
    var boolean = null;
    var primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);
    if (primitiveTerminalNode !== null) {
        var primitiveTerminalNodeContent = primitiveTerminalNode.getContent();
        switch(primitiveTerminalNodeContent){
            case _constants.TRUE:
                {
                    boolean = true;
                    break;
                }
            case _constants.FALSE:
                {
                    boolean = false;
                    break;
                }
        }
    }
    return boolean;
}
function stringFromStringLiteral(stringLiteral, context) {
    var string = stringLiteral.replace(/(^"|"$)/g, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBOVUxMLCBUUlVFLCBGQUxTRSwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBOVU1CRVJfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcmVkdWNlVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVkdWNlL3ZhbHVlXCIpLFxuICAgICAgdGVybmFyeVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm5hcnkvdmFsdWVcIiksXG4gICAgICBudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9AbnVtYmVyXCIpLFxuICAgICAgcHJpbWl0aXZlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvQHByaW1pdGl2ZVwiKSxcbiAgICAgIHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3JldHVyblN0YXRlbWVudC92YWx1ZVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9Ac3RyaW5nLWxpdGVyYWxcIiksXG4gICAgICB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZUFzc2lnbm1lbnQvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ib29sZWFuID0gYm9vbGVhbjtcbiAgICB0aGlzLnNvbWUgPSBzb21lO1xuICAgIHRoaXMuZXZlcnkgPSBldmVyeTtcbiAgICB0aGlzLnJlZHVjZSA9IHJlZHVjZTtcbiAgICB0aGlzLnRlcm5hcnkgPSB0ZXJuYXJ5O1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5vZGVRdWVyeSA9IG5vZGVRdWVyeTtcbiAgICB0aGlzLm5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5O1xuICAgIHRoaXMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gICAgdGhpcy5uZWdhdGVkVmFsdWUgPSBuZWdhdGVkVmFsdWU7XG4gICAgdGhpcy5iaXR3aXNlVmFsdWUgPSBiaXR3aXNlVmFsdWU7XG4gICAgdGhpcy5icmFja2V0ZWRWYWx1ZSA9IGJyYWNrZXRlZFZhbHVlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbGVhbjtcbiAgfVxuXG4gIGdldFNvbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29tZTtcbiAgfVxuXG4gIGdldEV2ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmV2ZXJ5O1xuICB9XG5cbiAgZ2V0UmVkdWNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZHVjZTtcbiAgfVxuXG4gIGdldFRlcm5hcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybmF5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROb2RlUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZVF1ZXJ5O1xuICB9XG5cbiAgZ2V0Tm9kZXNRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlc1F1ZXJ5O1xuICB9XG5cbiAgZ2V0Q29tcGFyaXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJpc29uO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXROZWdhdGVkVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZFZhbHVlO1xuICB9XG5cbiAgZ2V0Qml0d2lzZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJpdHdpc2VWYWx1ZTtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJyYWNrZXRlZFZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERVNfVFlQRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5zb21lLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmV2ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZWR1Y2UuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy50ZXJuYXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2RlUXVlcnkuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29tcGFyaXNvbi5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5yZXR1cm5CbG9jay5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRWYWx1ZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYml0d2lzZVZhbHVlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmJyYWNrZXRlZFZhbHVlLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGNvbnRleHQpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKHRoaXMubm9kZXMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IG51bWJlckFzU3RyaW5nKHRoaXMubnVtYmVyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RyaW5nICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmdBc1N0cmluZyh0aGlzLnN0cmluZylcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9vbGVhbiAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYm9vbGVhbkFzU3RyaW5nKHRoaXMuYm9vbGVhbilcbiAgICB9IGVsc2UgaWYgKHRoaXMuc29tZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5zb21lLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ldmVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnJlZHVjZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGVybmFyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy50ZXJuYXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLm5vZGVRdWVyeS5nZXRTdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZXNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5ub2Rlc1F1ZXJ5LmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmNvbXBhcmlzb24uZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnJldHVybkJsb2NrLmdldFN0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5uZWdhdGVkVmFsdWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gdGhpcy5iaXR3aXNlVmFsdWUuZ2V0U3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyYWNrZXRlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSB0aGlzLmJyYWNrZXRlZFZhbHVlLmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLm5vZGUgIT09IG51bGwpICB8fFxuICAgICAgICAgICAgICAgKHRoaXMubm9kZXMgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5udW1iZXIgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5zdHJpbmcgIT09IG51bGwpIHx8XG4gICAgICAgICAgICAgICAodGhpcy5ib29sZWFuICE9PSBudWxsKSkge1xuICAgICAgdmFsdWUgPSB0aGlzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zb21lICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc29tZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ldmVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmVkdWNlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmVkdWNlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50ZXJuYXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudGVybmFyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmNvbXBhcmlzb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJldHVybkJsb2NrICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5uZWdhdGVkVmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJpdHdpc2VWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJpdHdpc2VWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5icmFja2V0ZWRWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpc0VxdWFsVG8odmFsdWUpIHtcbiAgICBsZXQgZXF1YWxUbztcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVzID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbm9kZXNCID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHZhbHVlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmcgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nID09PSBzdHJpbmcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBub2RlID0gbnVsbE5vZGU7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBib29sZWFuID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgYm9vbGVhbiA9IG51bGwsXG4gICAgICAgICAgc29tZSA9IG51bGwsXG4gICAgICAgICAgZXZlcnkgPSBudWxsLFxuICAgICAgICAgIHJlZHVjZSA9IG51bGwsXG4gICAgICAgICAgdGVybmFyeSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvbiA9IG51bGwsXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgYml0d2lzZVZhbHVlID0gbnVsbCxcbiAgICAgICAgICBicmFja2V0ZWRWYWx1ZSA9IG51bGwsXG4gICAgICAgICAgdmFsdWUgPSBuZXcgVmFsdWUobm9kZSwgbm9kZXMsIG51bWJlciwgc3RyaW5nLCBib29sZWFuLCBzb21lLCBldmVyeSwgcmVkdWNlLCB0ZXJuYXJ5LCB2YXJpYWJsZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBjb21wYXJpc29uLCByZXR1cm5CbG9jaywgcHJvY2VkdXJlQ2FsbCwgbmVnYXRlZFZhbHVlLCBiaXR3aXNlVmFsdWUsIGJyYWNrZXRlZFZhbHVlKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgbm9kZXMgPSBudWxsLFxuICAgICAgICAgIG51bWJlciA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBzb21lID0gbnVsbCxcbiAgICAgICAgICBldmVyeSA9IG51bGwsXG4gICAgICAgICAgcmVkdWNlID0gbnVsbCxcbiAgICAgICAgICB0ZXJuYXJ5ID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG51bGwsXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBjb21wYXJpc29uID0gbnVsbCxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgbmVnYXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICBiaXR3aXNlVmFsdWUgPSBudWxsLFxuICAgICAgICAgIGJyYWNrZXRlZFZhbHVlID0gbnVsbCxcbiAgICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVkdWNlTm9kZShyZWR1Y2VOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVkdWNlVmFsdWVOb2RlID0gcmVkdWNlVmFsdWVOb2RlUXVlcnkocmVkdWNlTm9kZSksXG4gICAgICAgICAgdmFsdWVOb2RlID0gcmVkdWNlVmFsdWVOb2RlLCAvLy9cbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuYXJ5Tm9kZSh0ZXJuYXJ5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm5hcnlWYWx1ZU5vZGUgPSB0ZXJuYXJ5VmFsdWVOb2RlUXVlcnkodGVybmFyeU5vZGUpLFxuICAgICAgICAgIHZhbHVlTm9kZSA9IHRlcm5hcnlWYWx1ZU5vZGUsIC8vL1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJldHVyblN0YXRlbWVudE5vZGUocmV0dXJuU3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZVF1ZXJ5KHJldHVyblN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhbHVlTm9kZSA9IHJldHVyblN0YXRlbWVudFZhbHVlTm9kZSwgLy8vXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGUgPSB2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbWVudE5vZGUpLFxuICAgICAgICAgIHZhbHVlTm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudFZhbHVlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKSB7XG4gIGxldCBub2RlTWF0Y2hlcztcblxuICBpZiAoKG5vZGVBID09PSBudWxsTm9kZSkgfHwgKG5vZGVCID09PSBudWxsTm9kZSkpIHtcbiAgICBub2RlTWF0Y2hlcyA9IChub2RlQSA9PT0gbm9kZUIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGVBRXF1YWxUb05vZGVBID0gbm9kZUEuaXNFcXVhbFRvKG5vZGVCKTtcblxuICAgIG5vZGVNYXRjaGVzID0gbm9kZUFFcXVhbFRvTm9kZUE7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBub2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQikge1xuICBsZXQgbm9kZXNNYXRjaDtcblxuICBub2Rlc01hdGNoID0gbWF0Y2gobm9kZXNBLCBub2Rlc0IsIChub2RlQSwgbm9kZUIpID0+IHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1hdGNoTm9kZShub2RlQSwgbm9kZUIpO1xuXG4gICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBub2RlQXNTdHJpbmcobm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVTdHJpbmcgID0gKG5vZGUgPT09IG51bGxOb2RlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBOVUxMIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgc3RyaW5nID0gYCcke25vZGVTdHJpbmd9J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbm9kZXNBc1N0cmluZyhub2RlcywgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGVzKTtcblxuICBzdHJpbmcgPSBgJyR7bm9kZXNTdHJpbmd9J2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbnVtYmVyQXNTdHJpbmcobnVtYmVyKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgc3RyaW5nID0gYCR7bnVtYmVyfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nQXNTdHJpbmcoc3RyaW5nKSB7XG4gIHN0cmluZyA9IGBcIiR7c3RyaW5nfVwiYDsgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYm9vbGVhbkFzU3RyaW5nKGJvb2xlYW4pIHtcbiAgbGV0IHN0cmluZztcblxuICBzdHJpbmcgPSBgJyR7Ym9vbGVhbn0nYDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB2YWx1ZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU29tZSwgRXZlcnksIFJlZHVjZSwgVmFsdWUsIFRlcm5hcnksIFZhcmlhYmxlLCBOb2RlUXVlcnksIE5vZGVzUXVlcnksIENvbXBhcmlzb24sIFJldHVybkJsb2NrLCBQcm9jZWR1cmVDYWxsLCBOZWdhdGVkVmFsdWUsIEJpdHdpc2VWYWx1ZSwgQnJhY2tldGVkVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzID0gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG51bWJlciA9IG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBib29sZWFuID0gYm9vbGVhbkZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc29tZSA9IFNvbWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBldmVyeSA9IEV2ZXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcmVkdWNlID0gUmVkdWNlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdGVybmFyeSA9IFRlcm5hcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gTm9kZVF1ZXJ5LmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IE5vZGVzUXVlcnkuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gUmV0dXJuQmxvY2suZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5lZ2F0ZWRWYWx1ZSA9IE5lZ2F0ZWRWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJpdHdpc2VWYWx1ZSA9IEJpdHdpc2VWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGJyYWNrZXRlZFZhbHVlID0gQnJhY2tldGVkVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZSA9IG5ldyBWYWx1ZShub2RlLCBub2RlcywgbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIHNvbWUsIGV2ZXJ5LCByZWR1Y2UsIHRlcm5hcnksIHZhcmlhYmxlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIGNvbXBhcmlzb24sIHJldHVybkJsb2NrLCBwcm9jZWR1cmVDYWxsLCBuZWdhdGVkVmFsdWUsIGJpdHdpc2VWYWx1ZSwgYnJhY2tldGVkVmFsdWUpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9kZUZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBub2RlID0gbnVsbDtcblxuICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGUgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChwcmltaXRpdmVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50ID0gcHJpbWl0aXZlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIHN3aXRjaCAocHJpbWl0aXZlVGVybWluYWxOb2RlQ29udGVudCkge1xuICAgICAgY2FzZSBOVUxMOiB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbm9kZXNGcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub2RlcyA9IG51bGw7ICAvLy9cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIG51bWJlckZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXIgPSBudWxsO1xuXG4gIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZSA9IG51bWJlclRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKG51bWJlclRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQgPSBudW1iZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgbnVtYmVyID0gTnVtYmVyKG51bWJlclRlcm1pbmFsTm9kZUNvbnRlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZyA9IG51bGw7XG5cbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gIGlmIChzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBib29sZWFuRnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZSA9IHByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgaWYgKHByaW1pdGl2ZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBwcmltaXRpdmVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgc3dpdGNoIChwcmltaXRpdmVUZXJtaW5hbE5vZGVDb250ZW50KSB7XG4gICAgICBjYXNlIFRSVUU6IHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRkFMU0U6IHtcbiAgICAgICAgYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZyA9IHN0cmluZ0xpdGVyYWwucmVwbGFjZSgvKF5cInxcIiQpL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwicmVkdWNlVmFsdWVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJuYXJ5VmFsdWVOb2RlUXVlcnkiLCJudW1iZXJUZXJtaW5hbE5vZGVRdWVyeSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZVF1ZXJ5IiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWUiLCJub2RlIiwibm9kZXMiLCJudW1iZXIiLCJzdHJpbmciLCJib29sZWFuIiwic29tZSIsImV2ZXJ5IiwicmVkdWNlIiwidGVybmFyeSIsInZhcmlhYmxlIiwibm9kZXNRdWVyeSIsImNvbXBhcmlzb24iLCJyZXR1cm5CbG9jayIsInByb2NlZHVyZUNhbGwiLCJuZWdhdGVkVmFsdWUiLCJiaXR3aXNlVmFsdWUiLCJicmFja2V0ZWRWYWx1ZSIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldFN0cmluZyIsImdldEJvb2xlYW4iLCJnZXRTb21lIiwiZ2V0RXZlcnkiLCJnZXRSZWR1Y2UiLCJnZXRUZXJuYXJ5IiwidGVybmF5IiwiZ2V0VmFyaWFibGUiLCJnZXROb2RlUXVlcnkiLCJnZXROb2Rlc1F1ZXJ5IiwiZ2V0Q29tcGFyaXNvbiIsImdldFJldHVybkJsb2NrIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldE5lZ2F0ZWRWYWx1ZSIsImdldEJpdHdpc2VWYWx1ZSIsImdldEJyYWNrZXRlZFZhbHVlIiwiZ2V0VHlwZSIsInR5cGUiLCJOT0RFX1RZUEUiLCJOT0RFU19UWVBFIiwiTlVNQkVSX1RZUEUiLCJTVFJJTkdfVFlQRSIsIkJPT0xFQU5fVFlQRSIsImFzU3RyaW5nIiwiY29udGV4dCIsIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJudW1iZXJBc1N0cmluZyIsInN0cmluZ0FzU3RyaW5nIiwiYm9vbGVhbkFzU3RyaW5nIiwiZXZhbHVhdGUiLCJ2YWx1ZSIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsImZyb21Ob2RlIiwibnVsbE5vZGUiLCJmcm9tTm9kZXMiLCJmcm9tU3RyaW5nIiwiZnJvbUJvb2xlYW4iLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwidmFsdWVGcm9tVmFsdWVOb2RlIiwiZnJvbVJlZHVjZU5vZGUiLCJyZWR1Y2VOb2RlIiwicmVkdWNlVmFsdWVOb2RlIiwiZnJvbVRlcm5hcnlOb2RlIiwidGVybmFyeU5vZGUiLCJ0ZXJuYXJ5VmFsdWVOb2RlIiwiZnJvbVJldHVyblN0YXRlbWVudE5vZGUiLCJyZXR1cm5TdGF0ZW1lbnROb2RlIiwicmV0dXJuU3RhdGVtZW50VmFsdWVOb2RlIiwiZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbWVudE5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnRWYWx1ZU5vZGUiLCJuYW1lIiwibm9kZUFFcXVhbFRvTm9kZUEiLCJub2RlU3RyaW5nIiwiTlVMTCIsIm5vZGVzU3RyaW5nIiwiU29tZSIsImRvbSIsIkV2ZXJ5IiwiUmVkdWNlIiwiVGVybmFyeSIsIlZhcmlhYmxlIiwiTm9kZVF1ZXJ5IiwiTm9kZXNRdWVyeSIsIkNvbXBhcmlzb24iLCJSZXR1cm5CbG9jayIsIlByb2NlZHVyZUNhbGwiLCJOZWdhdGVkVmFsdWUiLCJCaXR3aXNlVmFsdWUiLCJCcmFja2V0ZWRWYWx1ZSIsIm5vZGVGcm9tVmFsdWVOb2RlIiwibm9kZXNGcm9tVmFsdWVOb2RlIiwibnVtYmVyRnJvbVZhbHVlTm9kZSIsInN0cmluZ0Zyb21WYWx1ZU5vZGUiLCJib29sZWFuRnJvbVZhbHVlTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZSIsInByaW1pdGl2ZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibnVtYmVyVGVybWluYWxOb2RlIiwibnVtYmVyVGVybWluYWxOb2RlQ29udGVudCIsIk51bWJlciIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdGcm9tU3RyaW5nTGl0ZXJhbCIsIlRSVUUiLCJGQUxTRSIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNCQTs7O2VBQUE7Ozt5QkFwQitCOzJEQUVmOytEQUNLO3FCQUVLO3lCQUVzQjtxQkFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDLGtCQUNqQ0Msd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDLG1CQUNsQ0UsMEJBQTBCRixJQUFBQSxnQkFBUyxFQUFDLG1CQUNwQ0csNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFDLHNCQUN2Q0ksZ0NBQWdDSixJQUFBQSxnQkFBUyxFQUFDLDJCQUMxQ0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDLDJCQUMzQ00sbUNBQW1DTixJQUFBQSxnQkFBUyxFQUFDO0lBRW5ELFdBQWVPLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVsQixTQUFTLEVBQUVtQixVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxjQUFjO2dDQURwS2pCO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtR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